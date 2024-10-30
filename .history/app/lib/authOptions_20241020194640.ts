import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import { CredentialsProvider } from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: {
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
        }
    }
}