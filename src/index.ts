import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { tasksRouter } from './routes/tasks-router';
import { amISamuraiRouter } from './routes/amisamurai-router';
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to SamuraiME! /\\/\\/');
});

app.use('/tasks', tasksRouter);
app.use('/amisamurai', amISamuraiRouter);

app.listen(port, () => {
  console.log(`SamuraiME app listening on port ${port}`);
});
