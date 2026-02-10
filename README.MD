# 🍽️ Restaurant Reservation System (MERN Stack)

A full‑stack **Restaurant Reservation System** that allows users to book, view, and manage table reservations online. The application is built using the **MERN stack** with a clean separation between frontend and backend, following industry‑standard practices.

---

## 🚀 Features

* Public-facing interface for customers to create, view, and cancel table reservations
* **Admin panel with JWT-based authentication**, protected routes, and role-based access control
* Menu management (add, update, delete items) with **Cloudinary image uploads**
* Reservation management for admins with full CRUD operations
* RESTful APIs for frontend–backend communication
* Secure backend architecture with environment-based configuration
* Responsive UI for desktop and mobile devices

---

## 🛠️ Tech Stack

**Frontend (User & Admin):**

* React.js (Hooks, functional components)
* Tailwind CSS, CSS3
* HTML5
* Axios, React Toastify

**Backend:**

* Node.js
* Express.js
* MongoDB
* Mongoose ORM
* JWT (Authentication & Authorization)
* Cloudinary (Image storage)

**Other Tools & Concepts:**

* REST APIs & JSON
* Git & GitHub (version control)
* Environment variables (`.env`)

---

## 📁 Project Structure

```
Restaurant-Reservation-project/
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Auth & route protection
│   ├── config/          # DB & cloud configuration
│   ├── .env.example     # Environment variable template
│   └── server.js        # Backend entry point
│
├── frontend/            # Customer-facing application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   └── main.jsx
│
├── admin/               # Admin dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

Sensitive information is excluded from version control. Create a `.env` file inside the `backend` directory using the template below:

```

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

````

> `.env` is ignored via `.gitignore` for security reasons. A `.env.example` file is provided for reference.

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/RanishVishwakarma/Restaurant-Reservation-project.git
````

### 1️⃣ Backend setup

```bash
cd backend
npm install
npm run dev
```

### 2️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```
### 3️⃣ Admin setup
npm install
npm run dev
---

## 📌 API Overview (Sample)

* `POST /api/reservations/create` – Create a reservation
* `GET /api/reservations/all` – Fetch all reservations
* `DELETE /api/reservations/delete/:id` – Cancel a reservation

---

## 🎯 Learning Outcomes

* Hands‑on experience with MERN stack development
* Implemented RESTful APIs with proper data modeling
* Improved understanding of full‑stack architecture and project structuring
* Practical exposure to Git‑based version control and environment management

---

## 📄 Note for Recruiters / Interviewers

This project demonstrates **full‑stack development skills**, clean architecture, and best practices such as secure environment configuration and modular code organization. While not deployed, it is **deployment‑ready in structure and design**.

---

⭐ If you find this project useful, feel free to star the repository.
