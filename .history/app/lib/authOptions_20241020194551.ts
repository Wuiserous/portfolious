import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import Credentials from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: {
        Credentials: {
    }
}