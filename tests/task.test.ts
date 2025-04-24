import request from 'supertest';
import express from 'express';
import taskRoutes from '../src/routes/taskRoutes';
import { title } from 'process';

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

describe('Task API', () => {
    let taskId = '';

    it('should create a task', async () => {
        const res = await request(app).post('/tasks').send({
            title: 'Test task',
            description: 'Do something'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe('Test task');
        taskId = res.body.id;
    });

    it('should get all tasks', async () => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get task by id', async() => {
        const res = await request(app).get(`/tasks/${taskId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(taskId);
    });

    it('should update task', async () => {
        const res = await request(app).put(`/tasks/${taskId}`).send({
            completed: true
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.completed).toBe(true);
    });

    it('should delete task', async () => {
        const res = await request(app).delete(`/tasks/${taskId}`);
        expect(res.statusCode).toBe(204);
    });
});