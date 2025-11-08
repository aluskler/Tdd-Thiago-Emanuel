export default class ContaBancaria {
  constructor() {
    this.saldo = 0;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(valor) {
    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("Valor de depósito inválido");
    }
    this.saldo += valor;
  }
}
