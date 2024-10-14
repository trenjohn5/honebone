import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, World!'));

app.get('/counter', async (c) => {
    const id = c.env.COUNTER.idFromName('default');
    const stub = c.env.COUNTER.get(id);
    const res = await stub.fetch(c.req);
    return c.body(await res.text());
});

export default app;
