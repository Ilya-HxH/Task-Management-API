import { Task } from '../types/task';
import { v4 as uuidv4} from 'uuid';

const tasks: Task[] = [];

export const getAllTasks = (): Task[] => tasks;

export const getTaskById = (id: string): Task | undefined =>
    tasks.find(task => task.id === id);

export const createTask = (title: string, description: string): Task => {
    const newTask: Task = {
        id: uuidv4(),
        title,
        description,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
};

export const updateTask = (id: string, updates: Partial<Omit<Task, 'id'>>): Task | null => {
    const task = getTaskById(id);
    if (!task) return null;
    Object.assign(task, updates);
    return task;
};

export const deleteTask = (id: string): boolean => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
};