async function authRoute (server: any, opts: object, done: any) {
  
  server.get('/login', async function (req: any, res: any) {
    return res.send({ login: true })
  })

  server.get('/register', async function (req: any, res: any) {
    return res.send({ register: true })
  })

  await done()
}


export default {
  prefix: '/auth',
  router: authRoute,
}