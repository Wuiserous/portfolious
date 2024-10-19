// src/pages/api/posts/create.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"; // Import Prisma client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { content } = req.body;

      if (!content) {
        return res.status(400).json({ error: "Content is required" });
      }

      const newPost = await prisma.post.create({
        data: {
          content,
        },
      });

      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create post" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
