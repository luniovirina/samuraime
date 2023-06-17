import { Router } from 'express';
import { Request, Response } from 'express';
import { amISamurai } from '../repositories/amisamurai-repository';
export const amISamuraiRouter = Router({});

amISamuraiRouter.get('/', (req: Request, res: Response) => {
  res.send(amISamurai.getResponse());
});

amISamuraiRouter.get('/recommendation', (req: Request, res: Response) => {
  res.send(amISamurai.getRecommendation());
});
