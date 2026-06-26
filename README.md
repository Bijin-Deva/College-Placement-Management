# 🎓 College Placement Management System

> A full-stack web application built with the **MERN stack** to digitise and centralise campus placement activities — student profiles, job opportunities, learning resources, and placement analytics on a single platform.

---

## ✨ Features

### 👨‍🎓 Student
- Register and log in with a college email and password
- View, add, and edit a detailed profile — academic marks, skills, projects, certifications, internships, achievements, and coding profiles
- Browse job and internship opportunities posted by the placement cell
- Access learning resources and online courses
- Track personal placement progress (companies applied, interviews attended, offers received)

### 📊 Dashboard
- Overall placement rate — doughnut chart
- Department-wise student status — pie chart with dropdown filter
- Eligible vs. placed students — bar chart
- Company-wise recruitment funnel with drill-down
- Salary package comparison — line chart with year-on-year view
- Live count of active job postings from the API

### 🔐 Security
- Passwords hashed with **bcrypt** before storing — plain-text never saved
- Session management with **JWT tokens** stored in local storage
- All post-login pages wrapped in a **ProtectedRoute** component — unauthenticated users redirected to login

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (v19), Vite, React Router DOM |
| UI & Charts | Bootstrap 5, Chart.js, react-chartjs-2 |
| HTTP Client | Axios |
| Backend | Node.js, Express.js (v5) |
| Database | MongoDB Atlas (Mongoose ODM) |
| Auth | JSON Web Token (JWT), bcryptjs |
| Config | cors, dotenv, nodemon |

---

## 📂 Project Structure

```
College-Placement-Management/
│
├── backend/
│   ├── models/
│   │   ├── User.js              # Registration & login schema
│   │   ├── StudentProfile.js    # Detailed profile schema
│   │   ├── jobs.js              # Job / internship schema
│   │   └── Course.js            # Course / resource schema
│   ├── .env                     # Environment variables (not in Git)
│   └── server.js                # Express app entry point
│
└── frontend/
    ├── public/
    └── src/
        ├── assets/              # Images and static files
        ├── components/
        │   └── profile/         # Profile sub-section components
        ├── layouts/             # Shared layout (Header + SideNav + Footer)
        ├── pages/               # All page components (Login, Register, Home, etc.)
        └── styles/              # Custom CSS files
```

---

## ⚙️ Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or above
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account with a cluster and connection string ready

---

### 1. Clone the Repository

```bash
git clone https://github.com/Bijin-Deva/College-Placement-Management
cd College-Placement-Management
```

---

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` folder:

```bash
# backend/.env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

---

### 3. Set Up and Run the Backend

```bash
cd backend
npm install mongoose cors dotenv bcryptjs jsonwebtoken
npm install nodemon --save-dev
node server.js
```

> Backend runs on `http://localhost:5000`

---

### 4. Set Up and Run the Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm install bootstrap react-router-dom axios
npm run dev
```

> Frontend runs on `http://localhost:5173`

---

### 5. Open the App

Go to `http://localhost:5173` in your browser.

- **Register** with your details
- **Login** using the same credentials
- Explore all modules — Dashboard, Opportunities, Courses, Profile

---

## 🔌 API Endpoints

**Base URL:** `http://localhost:5000`

### Auth
| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check — verify server is running |
| POST | `/api/register` | Register a new student account |
| POST | `/api/login` | Login and receive a JWT token |

### Jobs / Opportunities
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Fetch all job and internship listings |
| POST | `/api/jobs` | Add a new opportunity |
| PUT | `/api/jobs/:id` | Update an existing opportunity |
| DELETE | `/api/jobs/:id` | Delete an opportunity |

### Courses / Resources
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/courses` | Fetch all courses and resources |
| POST | `/api/courses` | Add a new course |
| PUT | `/api/courses/:id` | Update a course |
| DELETE | `/api/courses/:id` | Delete a course |

### Student Profile
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/profile/:collegeemail` | Fetch a student's full profile |
| PUT | `/api/profile/update/:collegeemail` | Create or update a student's profile |

---

## 🗺️ Frontend Routes

| Route | Page | Access |
|---|---|---|
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/reset-password` | Reset Password | Public |
| `/home` | Home | Protected |
| `/home/dashboard` | Placement Analytics | Protected |
| `/home/opportunities` | Job Listings | Protected |
| `/home/courses` | Courses & Resources | Protected |
| `/home/profile` | Student Profile | Protected |

---

## 🚀 Future Enhancements

- OTP-based password reset via email (Nodemailer / Twilio)
- Role-based access for a dedicated placement cell admin
- Resume and profile picture upload via cloud storage (AWS S3 / Cloudinary)
- Live dashboard data from real aggregated database queries
- Search, filter, and pagination on Opportunities and Courses pages
- Email and push notifications for new job postings
- Cloud deployment (Vercel + Render)
- React Native mobile app using the same REST API
- AI-powered job recommendation based on student skills


## 📄 License

This project was developed as part of the B.Tech final-year academic curriculum and is intended for educational purposes.
