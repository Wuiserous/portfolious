import {prisma} from '@/app/lib/prisma'

export async function POST(req: Req) {
  
    const {email, name, password} = await req.body();




}