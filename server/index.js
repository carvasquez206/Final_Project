import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
//initialize the app. run as function
const app = express();
//30mb, images will be sized
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://carvasquez:KingKong123@cluster0.tprv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch ((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);            //This has been depricated
//mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})


// https://www.mongodb.com/atlas/database MONGODB will host our database on their cloud.