# 🎟 Ticket Management System (NestJS + TypeORM + Supabase + Ably)

This project is a **Ticket Management System** built using:
- 🚀 **NestJS** for backend development
- 🗄 **TypeORM** with **Supabase (PostgreSQL)** for database management
- 🔄 **Ably** for real-time event updates
- 📜 **Swagger** for API documentation

## 📌 Features
✅ Create, read, update, delete (CRUD) **Tickets**  
✅ Manage **Agents** for tickets  
✅ Real-time event updates via **Ably**  
✅ Standardized API responses `{ data, message, statusCode }`  
✅ Detailed API documentation with **Swagger**  

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/ticket-management.git
cd ticket-management
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

env
Copy
Edit
DATABASE_URL=postgres://your_user:your_password@your_host:your_port/your_database
ABLY_API_KEY=your_ably_api_key
PORT=4000
4️⃣ Run Migrations
sh
Copy
Edit
npm run migration:run
5️⃣ Start the Server
sh
Copy
Edit
npm run start:dev
Now the API is running at http://localhost:4000 🎉

📝 API Documentation (Swagger)
Once the server is running, visit:

📌 Swagger UI: http://localhost:4000/api-docs

Swagger automatically generates interactive API documentation.

📡 API Endpoints
🎟 Ticket Routes
Method	Endpoint	Description
POST	/tickets	Create a new ticket
GET	/tickets	Get all tickets
GET	/tickets/:id	Get a single ticket by ID
PUT	/tickets/:id	Update a ticket
DELETE	/tickets/:id	Delete a ticket
👨‍💼 Agent Routes
Method	Endpoint	Description
POST	/agents	Create a new agent
GET	/agents	Get all agents
📜 API Response Format
Every API response follows a standard format:

json
Copy
Edit
{
  "data": {...},  
  "message": "Success message",
  "statusCode": 200
}
Example: Successful Agent Creation

json
Copy
Edit
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "message": "Agent created successfully",
  "statusCode": 201
}
Example: Ticket Not Found

json
Copy
Edit
{
  "data": null,
  "message": "Ticket with ID 123 not found",
  "statusCode": 404
}
🏗 Project Structure
bash
Copy
Edit
📂 ticket-management
 ┣ 📂 src
 ┃ ┣ 📂 agents
 ┃ ┃ ┣ 📜 agent.service.ts
 ┃ ┃ ┣ 📜 agent.controller.ts
 ┃ ┃ ┣ 📜 entities/agent.entity.ts
 ┃ ┃ ┣ 📜 dto/agent.dto.ts
 ┃ ┣ 📂 tickets
 ┃ ┃ ┣ 📜 ticket.service.ts
 ┃ ┃ ┣ 📜 ticket.controller.ts
 ┃ ┃ ┣ 📜 entities/ticket.entity.ts
 ┃ ┃ ┣ 📜 dto/ticket.dto.ts
 ┃ ┣ 📜 main.ts
 ┃ ┣ 📜 app.module.ts
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 README.md
🛠 Running in Production
sh
Copy
Edit
npm run build
npm run start:prod
Deploying on a Server
Use Docker, PM2, or a cloud service like Heroku, AWS, DigitalOcean
Ensure DATABASE_URL and ABLY_API_KEY are set in environment variables
🛠 Useful Commands
Command	Description
npm run start	Start the server
npm run start:dev	Start the server in development mode
npm run build	Compile the application
npm run start:prod	Start the compiled application
npm run typeorm migration:generate -- -n MigrationName	Generate a migration
npm run typeorm migration:run	Run pending migrations
npm run test	Run tests