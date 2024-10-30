import Providers from 'next-auth/providers'
import {prisma} from './prisma'

export const authOptions = {
    Providers: {
        Credent
    }
}