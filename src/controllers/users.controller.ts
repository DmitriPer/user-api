import { Request, Response } from 'express';
import { User } from '../types/user.types';
import { USERS } from '../mock/users.mock';

export function getUsers(_req: Request, res: Response) {
    return res.json(USERS);
}

export function getUserById(req: Request, res: Response) {
    const userid = Number(req.params.id);
    const user = USERS.find(u => u.id === userid);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
}

export function addUser(req: Request, res: Response) {
    const newUser = req.body as Omit<User, 'id'>;
    if (newUser.name && newUser.email) {
        const newId = USERS.length + 1;
        USERS.push({ id: newId, name: newUser.name, email: newUser.email })
        return res.status(201).json({ msg: `user ${newUser.name} was added succsessfuly` });
    }
    return res.status(400).json({ error: `missing data` });
}

export function deleteUser(req: Request, res: Response) {
    const userid = Number(req.params.id);
    const index = USERS.findIndex(u => u.id === userid);
    if (index === -1) return res.status(404).json({ error: 'User not found' });
    USERS.splice(index, 1);
    return res.status(200).json({ msg: `user was deleted succsessfuly` });
}

export function editUser(req: Request, res: Response) {
    const userid = Number(req.params.id);
    const updatedUser = req.body as Omit<User, 'id'>;
    const index = USERS.findIndex(u => u.id === userid);
    if (index === -1) return res.status(404).json({ error: 'User not found' });
    USERS[index] = { id: userid, ...updatedUser };
    return res.status(200).json({ msg: `user was updated succsessfuly` });
}
