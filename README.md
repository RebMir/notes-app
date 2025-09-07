# 📝 MERN Notes App

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Create, read, update, and delete your notes with user authentication and a modern, responsive interface.

🔗 **[Live Demo](https://notes-app-9kzw.onrender.com)**

## ✨ Features

- 🔐 User authentication (Register/Login/Logout)
- 📝 Create, read, update, and delete notes
- 🔍 Search and filter notes
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔒 Protected routes and middleware
- 💾 Persistent data storage with MongoDB
- 🚀 Fast and efficient with Vite

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- [Git](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/RebMir/notes-app.git
cd notes-app
```

### 2. Backend Setup

Navigate to the backend directory:
```
cd backend
```

Install backend dependencies:
```
npm install
```

Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/notes-app
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=development
```

Start MongoDB service:
```
# Windows
net start MongoDB

# macOS (with Homebrew)
brew services start mongodb/brew/mongodb-community

# Linux
sudo systemctl start mongod
```

Start the backend server:
```
npm run dev
# or
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```
cd frontend
# or if you're in the backend directory
cd ../frontend
```

Install frontend dependencies:
```
npm install
```

Create a `vite.config.js` file (if not exists) for API proxy:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
```

Start the frontend development server:
```
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
mern-notes-app/
├── backend/
│   ├── middleware/
│   │   └── auth.js           # Authentication middleware
│   ├── models/
│   │   ├── User.js          # User model
│   │   └── Note.js          # Note model
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── notes.js         # Notes CRUD routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Main server file
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NoteModal.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/me` - Get current user profile

### Notes Routes
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a specific note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🎨 Features Overview

### User Authentication
- Secure user registration and login
- Password hashing with bcryptjs
- JWT token-based authentication
- Protected routes and middleware

### Notes Management
- Create notes with title and description
- View all notes in a responsive grid layout
- Edit and update existing notes
- Delete notes with confirmation
- Search functionality (coming soon)

### UI/UX
- Modern, clean interface
- Responsive design for mobile and desktop
- Loading states and error handling
- Form validation
- Dark/light theme support (coming soon)

## 🔒 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
# Database
MONGODB_URI=mongodb://localhost:27017/notes-app

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Server
PORT=5000
NODE_ENV=development
```

## 🧪 Testing

### Backend Testing
```
cd backend
npm test
```

### Frontend Testing
```
cd frontend
npm test
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Ensure MongoDB Atlas is configured for production
3. Update MONGODB_URI to your cloud database connection string

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Configure API base URL for production

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [@RebMir](https://github.com/RebMir)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/RebMir/mern-notes-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible including:
   - Operating system
   - Node.js version
   - Error messages
   - Steps to reproduce

---

**Happy coding! 🚀**
