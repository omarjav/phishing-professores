import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { ZodError } from "zod"
import { env } from "./env"
import { targetRoutes } from "./http/controllers/target/routes"
import fastifyJwt from "@fastify/jwt"
import { userRoutes } from "./http/controllers/user/routes"
import { accessLogRoutes } from "./http/controllers/access-log/routes"
import { expectedTargetRoutes } from "./http/controllers/expected-access/routes"

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: "2h"
  }
})

app.register(fastifyCors, {
  origin: "*",
})

app.register(accessLogRoutes)
app.register(expectedTargetRoutes)
app.register(userRoutes)
app.register(targetRoutes)

app.setErrorHandler((err, _, res) => {
  if (err instanceof ZodError) {
    return res
      .status(400)
      .send({ message: "Erro de validação.", issues: err.format() })
  }

  if (env.NODE_ENV !== "production") {
    console.error(err)
  }

  return res.status(500).send(err)
})
