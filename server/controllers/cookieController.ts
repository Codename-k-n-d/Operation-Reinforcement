/**
 * import interfaces
 */
import { Request, Response, NextFunction } from 'express';
/**
 * custom alias for sessionController type
 */
interface CookieController {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => void,
};
/**
 * session controller
 */
const cookieController: CookieController = {
  setSSIDCookie: (req, res, next) => {
    // create a cookie using bcrypt
    res.cookie('ssid',res.locals.userId, {httpOnly: true});
    return next();
  }

};