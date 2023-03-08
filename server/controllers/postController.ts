/**
 * import interfaces
 */
import { Request, Response, NextFunction } from 'express';
/**
 * custom alias for userController type
 */
interface postController {
  createPost: (req: Request, res: Response, next: NextFunction) => void,
  getAllPosts: (req: Request, res: Response, next: NextFunction) => void,
}

/**
 * user controller
 */
const userController: postController = {
  createPost: (req, res, next) => {

    // query to database to create new post
    return next();
  },
  getAllPosts: (req, res, next) => {
    // query to database to get all posts for each user 
    return next();
  }

};