import {prisma} from '@/app/lib/prisma'

export async function POST(req: Request) {
  
    const {email, name, password} = await req.body();




}