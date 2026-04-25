import { serve } from '@hono/node-server'
import { info } from 'console'
import { Hono } from 'hono'
import type { tryDecode } from 'hono/utils/url'

const app = new Hono()

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

const start = async () => {
    try {
        serve({ fetch: app.fetch, port: 8002 }, (info) => {
            console.log("Payment Service is running on port: 8002")
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
