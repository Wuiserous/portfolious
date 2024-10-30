import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import { CredentialsProvider } from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: []
        CredentialsProvider: {
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (user) {
                    return user
                } else {
                    throw new Error('User not found')
                }
            }   
        }
        
    },

}