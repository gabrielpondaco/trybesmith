import express from 'express';
import 'express-async-errors';
import productsRouter from './router/productsRouter';
import usersRouter from './router/usersRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
