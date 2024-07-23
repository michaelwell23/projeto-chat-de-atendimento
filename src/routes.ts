import { Router } from 'express';

import { SettingsController } from './controllers/SettingsController';
import { UserController } from './controllers/UsersController';

const settingsController = new SettingsController();
const userController = new UserController();

const routes = Router();

routes.post('/settings', settingsController.create);
routes.post('/users', userController.create);

export default routes;
