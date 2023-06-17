import { Router } from 'express';
import { Request, Response } from 'express';
import { task } from '../repositories/tasks-repository';

export const tasksRouter = Router({});

tasksRouter.get('/', (req: Request, res: Response) => {
  res.send(task.getAllTasks());
});

tasksRouter.get('/:frequency', (req: Request, res: Response) => {
  let returned_value = task.getTaskByFrequency(req.params.frequency);
  if (returned_value) {
    res.send(returned_value);
  } else {
    res.sendStatus(404);
  }
});

tasksRouter.post('/create', (req: Request, res: Response) => {
  let task_created = false;
  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('frequency')) {
    task_created = task.createTask(req.body.frequency, req.body.name);
  }
  res.sendStatus(task_created ? 201 : 400);
});
