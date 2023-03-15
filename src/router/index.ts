import Fs from 'fs';
import Path from 'path';


export default async function (fastify: any, opts: any, done: any) {
  let routeNames = Fs.readdirSync(__dirname);

  for (let fileNameWithExt of routeNames) {
    const fileName = Path.parse(fileNameWithExt).name
    if (fileName.toLowerCase() == "index") continue;

    const { default: file } = await import(Path.join(__dirname, fileName))
    if (file.router && file.prefix) {
      await fastify.register(file.router, { prefix: file.prefix });
    }
  }

  await done();
}