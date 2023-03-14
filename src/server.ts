import fastify from 'fastify'
import routes from './router/index'


async function bootstrap () {
  const server = fastify()
  const PORT = parseInt(process.env.PORT || "", 10) || 8080;

  await server.register(routes, { prefix: '/api/v1' });

  server.listen({ port: PORT }, function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log(server.printRoutes())
    console.log("server is listening on" , address)
  })
}

bootstrap();
