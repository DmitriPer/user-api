"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const USERS = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com'
    }
];
//הבא את כל היוזרים
app.get('/users', (_req, res) => {
    return res.json(USERS);
});
//הבא יוזר לפי ID
app.get('/users/:id', (req, res) => {
    const userid = Number(req.params.id);
    const user = USERS.find(u => u.id === userid);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
});
//הוספת יוזר חדש    
app.post('/users', (req, res) => {
    const newUser = req.body;
    if (newUser.name && newUser.email) {
        const newId = USERS.length + 1;
        USERS.push({ id: newId, name: newUser.name, email: newUser.email });
        return res.status(201).json({ msg: `user ${newUser.name} was added succsessfuly` });
    }
    return res.status(400).json({ error: `missing data` });
});
//מחיקת יוזר
app.delete('/users/:id', (req, res) => {
    const userid = Number(req.params.id);
    const index = USERS.findIndex(u => u.id === userid);
    if (index === -1)
        return res.status(404).json({ error: 'User not found' });
    USERS.splice(index, 1);
    return res.status(200).json({ msg: `user was deleted succsessfuly` });
});
//עדכון יוזר
app.put('/users/:id', (req, res) => {
    const userid = Number(req.params.id);
    const updatedUser = req.body;
    const index = USERS.findIndex(u => u.id === userid);
    if (index === -1)
        return res.status(404).json({ error: 'User not found' });
    USERS[index] = { id: userid, ...updatedUser };
    return res.status(200).json({ msg: `user was updated succsessfuly` });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
//# sourceMappingURL=index.js.map