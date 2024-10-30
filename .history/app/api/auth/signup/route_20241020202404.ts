import {prisma} from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  
    const {email, name, password} = await req.json()

  try {
    const existingUser = await prisma.user.findUnique({
        where: {email}
    })
  
 if(existingUser) {
    return NextResponse.json({
        message: 'User already exists'
    }, {status: 400})
 }

 const hashedPassword = await bcrypt.hash(password, 10)

 const user = await prisma.user.create({
    data: {
        email,
        name,
        password: hashedPassword
    }
})

 
  } catch (error) {
    return NextResponse.json({
        message: 'Error while registering user',
        error: error
    }, {status: 500})
  }



}