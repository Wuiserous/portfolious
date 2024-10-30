import {prisma} from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  
    const {email, name, password} = await req.json()

  try {
    
  } catch (error) {
    
  }



}