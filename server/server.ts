/**
 * import third-party modules
 */
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
/**
 * import custom modules
 */
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const postController = require('./controllers/postController');
/**
 * import interfaces
 */
import { Application, Request, Response, NextFunction } from 'express';
/**
 * file scope variables
 */
const app: Application = new express();
const PORT: number = 3000;
/**
 * parsers for incoming requests:
 * - json
 * - urlencoded/form data
 * - cookies
*/
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cookieParser());
const checkpoint = (req:any,res:any,next:any)=>{
    console.log('hit checkpoint')
    return next()
    };
/**
 * routes
 */
app.post('/login', 
  checkpoint,
  userController.verifyUser, 
  cookieController.setSSIDCookie, 
  sessionController.startSession, 
  (req: Request, res: Response) => {
    res.locals.verifyUser 
      ? res.redirect('/home')
      : res.redirect('/signup');
});

/**
 * custom error type interface
 */
interface Error {
  log: string;
  status: number;
  message: { err: string };
}
/**
 * Global error handling middleware
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: Error = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: Error = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});