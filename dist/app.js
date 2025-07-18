import express from 'express';
const app = express();
app.use('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001/');
});
//# sourceMappingURL=app.js.map