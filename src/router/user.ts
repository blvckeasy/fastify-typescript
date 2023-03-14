async function userRoute (server: any, opts: object, done: any) {
  
  server.get('/user', async function (req: any, res: any) {
    return res.send({ user: true });
  })

  server.get('/test', async function (req: any, res: any) {
    return res.send({ user: true });
  })

  await done()
}


export default {
  prefix: '/users',
  router: userRoute,
}