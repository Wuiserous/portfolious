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
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                if (!user) {
                    return null
                }
                const passwordMatch = await bcrypt.compare(credentials.password, user.password)
                if (!passwordMatch) {
                    return null
                }
                return user
            },
        }), 
       
    ]
       
        
    },

