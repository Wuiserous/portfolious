import {prisma} from '@/app/lib/prisma'

export async function POST(req, res) {
    const {email, password} = req.body