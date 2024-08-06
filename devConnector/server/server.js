require('dotenv').config(); // Ensure this is at the very top
console.log('JWT Secret Key:', process.env.JWT_SECRET);

const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON bodies
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Use the authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
