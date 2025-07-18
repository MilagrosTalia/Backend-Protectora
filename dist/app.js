import express from 'express';
import { TipoAnimal } from './tipoAnimal.js';
import { Zona } from './zona.js';
const app = express();
const tipoAnimal = [
    new TipoAnimal('Perro', 12),
];
app.get('/api/tipoAnimal', (req, res) => {
    res.json(tipoAnimal);
});
const zona = [
    new Zona(10, 'Rosario')
];
app.get('/api/zona', (req, res) => {
    res.json(zona);
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map