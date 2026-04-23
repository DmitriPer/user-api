# User API

A RESTful API built with **Node.js**, **Express**, and **TypeScript**.  
Supports full CRUD operations on a users resource.

## Tech Stack

- Node.js
- Express
- TypeScript

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build and run in production

```bash
npm run build
npm start
```

Server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get user by ID    |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

## Request & Response Examples

### GET /users

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]
```

### POST /users

Request body:

```json
{
  "name": "Dima",
  "email": "dima@example.com"
}
```

Response:

```json
{ "msg": "user Dima was added successfully" }
```

### PUT /users/:id

Request body:

```json
{
  "name": "Dima Updated",
  "email": "dima@example.com"
}
```

### DELETE /users/:id

```json
{ "msg": "user was deleted successfully" }
```

## Notes

- Data is stored in memory — resets on server restart
- Prisma + SQLite integration coming soon
