import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import { CredentialsProvider } from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: {
        CredentialsProvider: {
    }
}