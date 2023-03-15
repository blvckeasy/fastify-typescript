import { FastifyInstance, RegisterOptions, DoneFuncWithErrOrRes, FastifyRequest, FastifyReply } from "fastify";


async function userRoute (server: FastifyInstance, opts: RegisterOptions, done: DoneFuncWithErrOrRes) {

  server.get('/user', async function (req: FastifyRequest, res: FastifyReply) {
    return res.send({ user: true });
  })

  server.get('/test', async function (req: FastifyRequest, res: FastifyReply) {
    return res.send({ user: true });
  })

  done()
}


export default {
  prefix: '/users',
  router: userRoute,
}