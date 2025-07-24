# 🔐 NexaAuth - Backend Authentication Setup

A minimal backend template built using **Node.js** and **Express.js** to handle user authentication. This starter pack helps you quickly set up secure login, registration, and protected routes using JSON Web Tokens (JWT).

---

## ⚙️ Features

- 🔑 JWT-based Authentication
- 🔐 Password Hashing with Bcrypt
- 🔁 Token Validation Middleware
- 📦 Modular Express Setup
- 🌱 Ready-to-extend structure for full-stack apps

---

## 📁 Project Structure

```
NexaAuth/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB *(planned)*
- JWT (JSON Web Tokens)
- Bcrypt

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NeerajKumar1001/NexaAuth.git
cd NexaAuth/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `backend` folder with the following content:

```env
PORT=5000
