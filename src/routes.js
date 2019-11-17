import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});
// Teste
// routes.get('/', async (req, res) => {
//  const user = await User.create({
//    name: 'claudemir',
//    email: 'claudemirgms@gmail.com',
//    password_hash: 'teste123',
//  });

//  return res.json(user);
// });

export default routes;
