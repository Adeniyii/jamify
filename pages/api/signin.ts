import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Invalid request" });

  let user: {
    ""?: any;
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    email?: string;
    password?: string;
  };
  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (e) {
    res.status(401).json({ error: "Account not found" });
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      "hello",
      {
        expiresIn: "8h",
      }
    );

    res.setHeader(
      "Set-cookie",
      cookie.serialize("SPOTIFY_ACCESS_TOKEN", token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 8 * 60 * 60,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      })
    );

    res.json(user);
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
};
