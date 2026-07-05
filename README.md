# Rushilift 🏋️‍♂️ — Premium Gymwear E-Commerce

Rushilift is a full-stack e-commerce web application for premium gymwear, built with the MERN stack (MongoDB, Express, React, Node.js). It features product browsing, cart management, user authentication, and a complete checkout flow.

**Live Demo:** [https://rushilift-ecommerce.vercel.app](https://rushilift-ecommerce.vercel.app)

---

## ✨ Features

- 🔐 User authentication (Signup / Login / Logout) with JWT
- 🛍️ Product listing and detail pages
- 🔍 Product search
- 🛒 Shopping cart with add/remove/update quantity
- 💳 Checkout and order placement
- 📦 Order history for logged-in users
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

**Deployment**
- Frontend: [Vercel](https://vercel.com)
- Backend: [Render](https://render.com)
- Database: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📁 Project Structure

```
rushilift-ecommerce/
├── backend/
│   ├── Routes/          # API route handlers
│   ├── model/           # Mongoose schemas
│   ├── server.js        # Express app entry point
│   └── .env              # Environment variables (not committed)
├── src/
│   ├── components/       # Reusable UI components (Navbar, ProductCard, Hero, Footer)
│   ├── pages/             # Page-level components (Home, Shop, Product, Cart, Checkout)
│   ├── api.js             # Axios instance and API config
│   └── App.jsx
├── public/
└── package.json
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm
- A MongoDB Atlas connection string

### 1. Clone the repository
```bash
git clone https://github.com/rushilockedin-hub/rushilift-ecommerce.git
cd rushilift-ecommerce
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:
```bash
node server.js
```
The backend will run on `http://localhost:5000`.

### 3. Frontend setup
Open a new terminal at the project root:
```bash
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

---

## 🌐 Deployment

| Service   | Platform | URL |
|-----------|----------|-----|
| Frontend  | Vercel   | `https://rushilift-ecommerce.vercel.app` |
| Backend   | Render   | `https://rushilift-ecommerce.onrender.com` |
| Database  | MongoDB Atlas | — |

### Environment Variables

**Backend (Render):**
| Key | Description |
|-----|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT token signing |

**Frontend (Vercel):**
| Key | Description |
|-----|-------------|
| `VITE_API_URL` | Base URL of the deployed backend API (e.g. `https://rushilift-ecommerce.onrender.com/api`) |

---

## 📌 Notes

- Free-tier Render backend may take up to 50 seconds to respond after a period of inactivity (cold start).
- Make sure file imports match exact case (e.g. `ProductCard.jsx`), since deployment environments are case-sensitive unlike Windows.

---

## 📄 License

This project is for personal/portfolio use.

---

## 🙋‍♂️ Author

Built by **Rushi** — [GitHub](https://github.com/rushilockedin-hub)
