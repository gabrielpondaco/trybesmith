import express from 'express';
import 'express-async-errors';
import productsRouter from './router/productsRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

export default app;
