import express from 'express';
import router from './routes'
import bodyParser from 'body-parser'
let app = express();
app.use(bodyParser.json());
app.use(router)

export default app