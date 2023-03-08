/**
 * import interfaces
 */
import { Request, Response, NextFunction } from 'express';
/**
 * custom alias for sessionController type
 */
interface SessionController {
  isLoggedIn: (req: Request, res: Response, next: NextFunction) => void,
  startSession: (req: Request, res: Response, next: NextFunction) => void,
}
/**
 * session controller
 */
const sessionController: SessionController = {
  isLoggedIn: (req, res, next) => {
    // sanitze input from req body
    const cookieId: String = req.cookies.ssid;
    // query to database to verify if cookie is valid
    return next();

  },
  startSession: (req, res, next) => {
    // create a unique SSID
    // query to database to add the new SSID to the table
    return next();

  }

};