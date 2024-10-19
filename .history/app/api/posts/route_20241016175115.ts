// src/app/api/posts/route.ts

import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Import Prisma client

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
      
    })
  }
  
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    // Create a new post in the database
    const newPost = await prisma.post.create({
      data: {
        content,
      },
    });

    // Return success message
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
