import crypto from 'node:crypto'

export class TipoAnimal {
  constructor(
    public nombre: string,
    public codigoTipo = crypto.randomUUID()
  ) {}
}
