import Providers from 'next-auth/providers'
import {prisma} from './prisma'
import bcrypt from 'bcryptjs'
import  CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions = {
    Providers: [
       
    ]
       
        
    },

}