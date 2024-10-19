import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoute from './routes/userRoute.js';
import documentRoute from './routes/documentRoute.js';
import noteRoute from './routes/noteRoute.js';
import cors from 'cors';

const app = express();

// Connect to the database
connectDB();

// Replace with your actual frontend URL
const frontendUrl = 'https://secureself-frontend-8xbs.vercel.app'; // Change this to your frontend's actual URL

// Enable CORS for the specified origin
app.use(cors({
    origin: frontendUrl, // Allow requests only from this origin
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Route handling
app.use("/api/user", userRoute);
app.use("/api/document", documentRoute);
app.use("/api/notes", noteRoute);

// Error handling middleware (keep this after all routes)
app.use(errorHandler);

// Add a 404 handler for any unmatched routes
app.use((req, res, next) => {
    res.status(404).send('404: Not Found');
});

// Start the server
const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
