import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//initialize the app. run as function
const app = express();
//30mb, images will be sized
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/atlas/database they will host our database on their cloud