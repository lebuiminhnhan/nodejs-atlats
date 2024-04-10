import * as express from 'express';
import userRoutes from './userRoutes';
import imageRouter from './imgRoutes';

const routes  = express.Router();
routes.use('/images', imageRouter);
routes.use('/users', userRoutes);
export default routes ;
