# Week 2 Express.js Assignment

## How to Run the Server

1. **Install dependencies:**
  ```bash
  npm install
  ```

2. **Start the server:**
  ```bash
  npm start
  ```
  The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### 1. `GET /api/items`
- **Description:** Retrieve all items.
- **Response:**
  ```json
  [
   {
    "id": 1,
    "name": "Item 1",
    "description": "Description of item 1"
   },
   ...
  ]
  ```

### 2. `GET /api/items/:id`
- **Description:** Retrieve a single item by ID.
- **Response:**
  ```json
  {
   "id": 1,
   "name": "Item 1",
   "description": "Description of item 1"
  }
  ```

### 3. `POST /api/items`
- **Description:** Create a new item.
- **Request Body:**
  ```json
  {
   "name": "New Item",
   "description": "Description of new item"
  }
  ```
- **Response:**
  ```json
  {
   "id": 2,
   "name": "New Item",
   "description": "Description of new item"
  }
  ```

### 4. `PUT /api/items/:id`
- **Description:** Update an existing item.
- **Request Body:**
  ```json
  {
   "name": "Updated Name",
   "description": "Updated description"
  }
  ```
- **Response:**
  ```json
  {
   "id": 1,
   "name": "Updated Name",
   "description": "Updated description"
  }
  ```

### 5. `DELETE /api/items/:id`
- **Description:** Delete an item by ID.
- **Response:**
  ```json
  {
   "message": "Item deleted successfully"
  }
  ```

---

## Example Requests

### Create an Item

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Book","description":"A good read"}'
```

### Get All Items

```bash
curl http://localhost:3000/api/items
```

### Update an Item

```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Book","description":"Updated description"}'
```

### Delete an Item

```bash
curl -X DELETE http://localhost:3000/api/items/1
```