// src/pages/api/posts/fetch.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "/lib/prisma"; // Import Prisma client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc", // Order by creation time, newest first
        },
      });

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch posts" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
