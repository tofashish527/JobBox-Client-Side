
# Job Portal - Fullstack Web Application

A job portal web application where users can register as **applicants** or **recruiters**, post jobs, apply for jobs, and manage job applications.

---

## 🚀 Tech Stack

### 🖥️ Client-Side (Frontend)

* React (with Hooks)
* React Router
* Axios
* Tailwind CSS + DaisyUI
* Firebase Authentication
* SweetAlert2

### 🗄️ Server-Side (Backend)

* Node.js
* Express.js
* MongoDB (with Mongoose)
* CORS, Cookie-Parser
* JSON Web Token (JWT) Auth
* dotenv

---

## 📂 Features

### 👥 Authentication & Authorization

* Firebase-based Login/Register system
* Protected routes using PrivateRoute and Firebase token verification

### User can act as both Recruiter or Applicant.

### 🧑‍💼 Recruiter Features

* Add New Jobs with form (with validation)
* View Jobs Posted by him/her
* View applications per job
* Change status of each application (e.g., Under Review, Hired)

### 👨‍🎓 Applicant Features

* View Job Listings with filters
* View Job Details
* Apply for a Job (LinkedIn, GitHub, Resume link)
* Edit/Delete their Applications
* See Applied Jobs with Status

### 📈 Additional Features

* SweetAlert2 confirmation
* Clean, responsive UI (Tailwind + DaisyUI)
* JWT authentication on protected API routes

---

## 📁 Folder Structure

```
job-portal/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── public/
│   ├── .env
│   └── vite.config.js
│
└── server/                 # Express backend
    ├── routes/
    ├── controllers/
    ├── middleware/
    ├── .env
    ├── index.js
    └── db.js
```

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

* Node.js & npm installed
* MongoDB running locally or URI from MongoDB Atlas

### 📦 Install Dependencies

#### For Client:

```bash
cd client
npm install
```

#### For Server:

```bash
cd server
npm install
```


### ▶️ Run the App

#### Start Server:

```bash
cd server
node index.js
```

#### Start Client:

```bash
cd client
npm run dev
```

App will run on:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:3000`

---

## 🔐 Security

* Firebase handles user authentication securely.
* JWT tokens are issued and validated on the server.
* Passwords are never stored manually.
* Token stored securely using HTTP-only cookies (recommended for production).

---

## ✨ Credits

Developed by [Tofashish Nujum]. Inspired  by real-world job boards. UI powered by TailwindCSS and DaisyUI.

---

