import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });

    if (!playlists)
      return res.status(400).json({ error: "No playlists found for user" });
    return res.json({ playlists });
  }
);
