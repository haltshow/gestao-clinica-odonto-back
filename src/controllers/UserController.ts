import { FastifyReply, FastifyRequest } from "fastify"
import { ICreateUser } from "../dtos/User"

export async function hello() {
    return {
        teste: "Ok"
    }
}

export async function getById(req: FastifyRequest, res: FastifyReply) {
    try {
        res.code(200).send({ success: true });
    } catch (err) {
        res.code(500).send({ success: false, message: 'Server Error' });
    }
}

export async function createUser(req: FastifyRequest, res: FastifyReply) {
    return {
        user: {
            teste: 1
        }
    }
}
