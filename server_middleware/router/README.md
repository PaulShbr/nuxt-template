# Router

https://expressjs.com/de/guide/routing.html

Grundaufbau eines Routers
```js
import express from 'express';

const Router = express.Router();

// Routes
Router.get("/", async(req, res) => {
    res.send("Hello World");
})

export default Router
```

## CORS

```js
import { addCors } from '../helpers/headers.ts';

Router.get("/", async (req, res) => {
    res = addCors(res, "*");
})
```