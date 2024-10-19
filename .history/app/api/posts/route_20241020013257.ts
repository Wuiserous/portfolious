// src/app/api/posts/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma'; // Import Prisma client

export async function GET() {
  // Fetch posts from the database in descending order (newest posts first)
  try{
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(posts);
  }catch (error) {
    return NextResponse.json({
      message: "error while fetching posts.", error
    }, {status: 500})
  }
  
}

