# 🗂️ Task Management System

A full-stack Task Management System built using **ASP.NET Core Web API** and **React (Material UI)**.  
This application allows users to manage tasks, teams, comments, and view dashboard statistics.

---

## 🚀 Features

### 🔐 Authentication
- Login & Logout
- Session-based authentication

### 📋 Tasks
- Create, update, delete tasks
- Task status: Todo / In Progress / Done
- Assign tasks to users

### 👥 Teams
- Create teams
- Assign users to teams

### 💬 Comments
- Add comments to tasks
- View task-related discussions

### 📊 Dashboard
- Total tasks count
- Total teams count
- Total comments count
- User-based task statistics

---

## 🛠️ Tech Stack

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Session Authentication

### Frontend
- React
- Material UI
- Axios
- React Router

---

## 🗄️ Database Tables

- Users
- Tasks
- Teams
- TeamUsers
- Comments

---

## ⚙️ Setup Instructions

### Backend
1. Open solution in Visual Studio
2. Update `appsettings.json` with SQL Server connection
3. Run database migrations
4. Start API (`https://localhost:xxxx`)

### Frontend
```bash
npm install
npm start
