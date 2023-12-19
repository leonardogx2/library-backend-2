import { Router } from 'express';
import { userRouter } from '../../../modules/User/routes/UserRoutes.routes';
import { bookRouter } from '../../../modules/Book/routes/BookRoutes.routes';
import { rentRouter } from '../../../modules/Rent/routes/RentRoutes.routes';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const router = Router();

router.use('/user', userRouter);
router.use('/book', ensureAuthenticated, bookRouter);
router.use('/rent', ensureAuthenticated, rentRouter);

export { router };
