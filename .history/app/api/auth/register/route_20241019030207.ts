import { NextRequest, NextResponse } from 'next/server'
import prisma from '@.../lib/prisma'
import { UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json()

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        role: role as UserRole,
        // Store hashed password in a secure way, not directly in the user model
        // For simplicity, we're not showing this part
      },
    })

    return NextResponse.json({ message: 'User registered successfully', userId: newUser.id }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}