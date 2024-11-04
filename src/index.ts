import fastify from 'fastify';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const server = fastify()

server.get('/ping', async (req, res) => {
    return 'pong\n'
})

server.listen({ port: PORT || 3000 }, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }

    console.log(`Server listening at ${address}`)
})
