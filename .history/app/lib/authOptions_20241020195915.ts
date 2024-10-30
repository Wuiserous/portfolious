import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import bcrypt from 'bcryptjs'
import  CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                const user = await prisma
            },
        }), 
       
    ]
       
        
    },

