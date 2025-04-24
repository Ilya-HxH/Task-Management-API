import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getTasks = (req: Request, res: Response): void => {
  res.json(taskService.getAllTasks());
};

export const getTask = (req: Request, res: Response): void => {
  const task = taskService.getTaskById(req.params.id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  res.json(task);
};

export const create = (req: Request, res: Response): void => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }
  const task = taskService.createTask(title, description);
  res.status(201).json(task);
};

export const update = (req: Request, res: Response): void => {
  const task = taskService.updateTask(req.params.id, req.body);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  res.json(task);
};

export const remove = (req: Request, res: Response): void => {
  const success = taskService.deleteTask(req.params.id);
  if (!success) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  res.status(204).send();
};