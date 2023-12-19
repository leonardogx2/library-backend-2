import express from 'express';
import { router } from './router';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(router);

const port = 3333;

app.listen(port, () => {
  console.log(`server on: http://localhost:${port}`);
});
