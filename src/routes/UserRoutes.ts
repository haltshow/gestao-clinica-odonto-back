import { FastifyInstance } from "fastify";
import { hello, getById, createUser } from "../controllers/UserController";

export async function UserRoutes(app: FastifyInstance) {
    app.get('/', hello)

    app.get('/:id', (req, res) => {
        return getById(req, res)
    })

    app.post('/', (req, res) => {
        return createUser(req, res)
    })
}
