import { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class USerController {
    constructor(){}

    async ListUsers(req: Request, res: Response){
        const users = await prisma.usuario.findMany();
        res.json({
            users,
        })
    }
}

export default new USerController();