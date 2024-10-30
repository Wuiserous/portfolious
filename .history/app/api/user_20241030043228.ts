// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, image, username } = req.body;

    // Ensure the required fields are present
    if (!name || !email || !image || !username) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    try {
      const user = await prisma.user.create({
        data: { name, email, avatarUrl: image, username },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user.", error });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users.", error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
