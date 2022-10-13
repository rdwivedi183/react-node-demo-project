import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/userRoutes.js';

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = `mongodb+srv://user:user123@ecommerce-flip-web.fzhlwr6.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
    .catch((error) => console.log("error"));


    // mongoose.set('useFindAndModify', false);


// https://www.mongodb.com/cloud/atlas
// DB_USERNAME=user
// DB_PASSWORD=user123