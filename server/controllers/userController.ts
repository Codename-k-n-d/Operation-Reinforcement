/**
 * import interfaces
 */
import { Request, Response, NextFunction } from 'express';
/**
 * custom alias for userController type
 */
interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void,
  verifyUser: (req: Request, res: Response, next: NextFunction) => void,
}

/**
 * user controller
 */
const userController: UserController = {
  createUser: (req, res, next) => {
    // sanitze input from req body
    const {username, password} = req.body;
    // query to database to create user
    return next();
  },
  verifyUser: (req, res, next) => {
    console.log('verifying user in userController')
    // sanitze input from req body
    const {username, password} = req.body;
    // query to database to find user
    return next();
  }

};
