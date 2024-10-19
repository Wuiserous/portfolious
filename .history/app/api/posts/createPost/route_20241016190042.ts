import { NextResponse } from 'next/server';
import prisma from ''; 

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
  