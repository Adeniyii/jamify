import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import prisma from "./prisma";

export const validateToken = (token: string) => {
  const { id }: any = jwt.verify(token, "hello");
  return id;
};

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SPOTIFY_ACCESS_TOKEN;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized request" });
    }

    let user: User;

    try {
      const id = validateToken(token);
      user = await prisma.user.findUnique({ where: { id } });

      if (!user) throw new Error("Unauthorized request");
    } catch (e) {
      return res.status(401).json({ error: e.message });
    }

    return handler(req, res, user);
  };
};
