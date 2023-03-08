import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
const app: Express = new express();
const PORT: number = 3000;

const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const postController = require('./controllers/postController');



/**
 * parsers for incoming requests:
 * - json
 * - urlencoded/form data
 * - cookies
*/
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cookieParser());

app.listen(PORT, (console.log('listening on port ', PORT)));