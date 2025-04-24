# Task Management API

REST API для управления задачами, разработанный с использованием **TypeScript** и **Express.js**. Данные хранятся в памяти (in-memory storage), без использования базы данных. Поддерживаются все базовые CRUD-операции, а также написаны unit-тесты с использованием **Jest**.

## Функционал
- Получение всех задач
- Получение задачи по ID
- Создание новой задачи
- Обновление задачи
- Удаление задачи

## Установка и запуск

1. **Клонирование репозитория**

git clone https://github.com/Ilya-HxH/Task-Management-API.git
cd Task-Management-API

2. **Установка зависимостей**

npm install

3. **Запуск в режиме разработки**

npm run dev

**Запуск в production режиме**

npm start

**Запуск тестов**

npm test

## Примеры API-запросов

GET /tasks - Получить все задачи
GET /tasks/:id - Получить задачу по id
POST /tasks - Создать новую задачу
PUT /tasks/:id - Обновить задачу
DELETE /tasks/:id - Удалить задачу