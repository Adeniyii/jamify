import { User } from "@prisma/client";
import { NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";

export default validateRoute((_, res: NextApiResponse, user: User) =>
  res.json(user)
);
