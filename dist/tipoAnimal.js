import crypto from 'node:crypto';
export class TipoAnimal {
    constructor(nombre, codigoTipo = crypto.randomUUID()) {
        this.nombre = nombre;
        this.codigoTipo = codigoTipo;
    }
}
//# sourceMappingURL=tipoAnimal.js.map