# Vein Spectre - Hospital Management System

A comprehensive hospital management system built with modern web technologies. This system provides a secure, scalable platform for managing hospital operations with distinct user roles and comprehensive features.

## 🏥 Project Overview

Vein Spectre is designed to streamline hospital operations by providing a centralized platform for patients, doctors, administrators, and super administrators. The system handles everything from appointment scheduling to patient records management, with role-based access control ensuring data security and privacy.

## ✨ Features

- **User Role Management**: Four distinct user roles with specific permissions
  - 👤 Patient: Appointment booking, medical history access, prescription viewing
  - 👨‍⚕️ Doctor: Patient management, appointment scheduling, prescription creation
  - 👩‍💼 Admin: Staff management, department oversight, operations management
  - 🔑 Super Admin: System configuration, user role assignment, global settings

- **Appointment System**: Scheduling, reminders, and management
- **Electronic Health Records**: Secure storage and access to patient records
- **Prescription Management**: Digital prescription creation and history
- **Reporting & Analytics**: Comprehensive reporting for administrators
- **Billing System**: Manage patient billing and insurance processing
- **Secure Authentication**: Role-based access control with JWT/OAuth

## 🛠️ Tech Stack

### Frontend
- React with TypeScript (Vite build tool)
- Tailwind CSS for styling
- Redux/Context API for state management
- React Router for navigation

### Backend
- Node.js + Express with TypeScript
- JWT for authentication
- RESTful API design

### Database
- MongoDB for document-based storage
- (or) PostgreSQL for relational data requirements

### Deployment
- Frontend: Vercel/Netlify
- Backend: Render/Heroku/Railway
- Database: MongoDB Atlas/AWS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vein-spectre.git
cd vein-spectre
```

2. Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Setup environment variables
```bash
# Frontend (.env in client directory)
VITE_API_URL=http://localhost:5000/api

# Backend (.env in server directory)
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the application
```bash
# Start frontend (from client directory)
npm run dev

# Start backend (from server directory)
npm run dev
```

## 📁 Project Structure

```
vein-spectre/
├── client/                 # Frontend application
│   ├── public/             # Public assets
│   │   ├── assets/         # Static assets
│   │   ├── src/
│   │   │   ├── assets/         # Static assets
│   │   │   ├── components/     # Reusable components
│   │   │   ├── context/        # React context providers
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── pages/          # Page components
│   │   │   ├── services/       # API services
│   │   │   ├── types/          # TypeScript types/interfaces
│   │   │   ├── utils/          # Utility functions
│   │   │   ├── App.tsx         # Main App component
│   │   │   └── main.tsx        # Entry point
│   │   ├── .env                # Environment variables
│   │   └── package.json        # Frontend dependencies
│   │
│   ├── server/                 # Backend application
│   │   ├── src/
│   │   │   ├── config/         # Configuration files
│   │   │   ├── controllers/    # Route controllers
│   │   │   ├── middleware/     # Express middleware
│   │   │   ├── models/         # Database models
│   │   │   ├── routes/         # API routes
│   │   │   ├── services/       # Business logic
│   │   │   ├── types/          # TypeScript types
│   │   │   ├── utils/          # Utility functions
│   │   │   └── app.ts          # Express app setup
│   │   ├── .env                # Environment variables
│   │   └── package.json        # Backend dependencies
│   │
│   └── README.md               # Project documentation
```

## 🔐 Authentication Flow

1. User registration/login
2. JWT token generation
3. Role-based authorization middleware
4. Secure API endpoints based on user roles

## 🌐 API Structure

- `/api/auth` - Authentication endpoints
- `/api/users` - User management
- `/api/patients` - Patient records
- `/api/doctors` - Doctor information
- `/api/appointments` - Appointment scheduling
- `/api/prescriptions` - Prescription management
- `/api/billing` - Billing information

## 📊 Database Schema

The system uses a well-structured database schema with relationships between:
- Users
- Patients
- Doctors
- Appointments
- Prescriptions
- Departments
- Billing records

## 🔄 Development Workflow

1. Create feature branches from `develop`
2. Submit PRs to `develop`
3. Release candidates merge to `staging`
4. Production releases merge to `main`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 