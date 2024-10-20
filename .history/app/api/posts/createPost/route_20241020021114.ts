import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma'; 

export async function POST(request: Request) {
    try {
      const { content } = await request.json();
  
      // Create a new post in the database
      const newPost = await prisma.post.create({
        data: {
          content,
        },
      });

      // Return the new post
      return NextResponse.json(newPost, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create post', error: error.message }, { status: 500 });
    }
  }
  