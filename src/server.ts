import Fastify from 'fastify';
import { UserRoutes } from "./routes/UserRoutes";

const app = Fastify({logger: true});

app.register(UserRoutes, { prefix: '/users'});

try {
    const port = process.env.PORT || 3000;
    app.listen({port: 3000});
    console.log(`Server is running on: http://localhost:${port}`);

} catch (err) {
    app.log.error(err);
    process.exit(1);
}
