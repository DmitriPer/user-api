import express from 'express';
import * as userController from '../controllers/users.controller';

const router = express.Router()
router.use(express.json());


router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.addUser);

router.delete('/:id', userController.deleteUser);

router.put('/:id', userController.editUser);

export default router;
