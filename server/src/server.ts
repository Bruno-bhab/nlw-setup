import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habist = await prisma.habit.findMany()

  return habist
})

app.listen({
  port: 3333
}).then( () => console.log('Server running!') )