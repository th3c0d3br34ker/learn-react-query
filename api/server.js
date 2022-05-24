const { nanoid } = require('nanoid');

// Require the framework and instantiate it
const app = require('fastify')({
  logger: {
    prettyPrint: {
      translateTime: true,
      ignore: 'pid,hostname,reqId,responseTime,req,res',
      messageFormat: '{msg} [id={reqId} {req.method} {req.url}]'
    }
  }
})

const favLangs = [];

app.register(require('@fastify/cors'), {
  origin: '*',
})

// Declare a route
app.get('/', async (request, reply) => {
  return { status: 'ok' };
})

app.get("/api/favlangs", async (request, reply) => {
  return { lang: favLangs };
});

app.post("/api/add-lang", async (request, reply) => {
  const record = {
    name: request.body.record,
    id: nanoid(6),
  };

  favLangs.push(record);
  return { status: "ok" }
});

// Run the server!
const start = async () => {
  try {
    await app.listen(5000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
