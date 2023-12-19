import { Router } from 'express';
import { createRentController } from '../useCases/CreateRent';
import { getAllRentsController } from '../useCases/GetAllRents';

const rentRouter = Router();

rentRouter.post('/', createRentController.handle);
rentRouter.get('/', getAllRentsController.handle);

export { rentRouter };
