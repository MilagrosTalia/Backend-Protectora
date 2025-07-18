import crypto from 'node:crypto';
export class TipoAnimal {
    constructor(nombre, codigoTipo = Number(crypto.randomUUID())) {
        this.nombre = nombre;
        this.codigoTipo = codigoTipo;
    }
}
//# sourceMappingURL=tipoAnimal.js.map