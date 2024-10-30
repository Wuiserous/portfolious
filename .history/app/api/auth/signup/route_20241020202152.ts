import {prisma} from '@/app/lib/prisma'

export async function POST(req: Request) {
  
    const {email, name, password} = await req.json()

    const existingUser = await prisma.user.findUnique({
        where: email
        }
    })
  




}