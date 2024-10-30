// pages/api/user.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, image, username } = req.body;
    const user = await prisma.user.create({
      data: { name, email, image, username },
    });
    res.status(201).json(user);
  } else if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
}
