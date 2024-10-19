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

connectDB();

// Replace with your actual frontend URL
const frontendUrl = 'https://secureself-frontend-8xbs.vercel.app'; // Change this to your frontend's actual URL

// Enable CORS for the specified origin
app.use(cors({

    origin: 'https://secureself-frontend-8xbs.vercel.app/', // Allow requests only from this origin
    origin: frontendUrl, // Allow only this origin

    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials
}));

const port = process.env.PORT || 5100;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);
app.use(cookieParser());

app.use("/api/user", userRoute);
app.use("/api/document", documentRoute);
app.use("/api/notes", noteRoute);

<<<<<<< HEAD
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
=======
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
>>>>>>> 87ff3f60fa7c347a75c356ab4a26bf8e47fefade
