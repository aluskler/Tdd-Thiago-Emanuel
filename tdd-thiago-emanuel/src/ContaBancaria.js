export default class ContaBancaria {
  constructor() {
    this.saldo = 0;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(valor) {
    this.#validarValorPositivo(valor, "depósito");
    this.saldo += valor;
  }

  #validarValorPositivo(valor, tipoOperacao) {
    if (typeof valor !== "number" || isNaN(valor)) {
      throw new Error(`Valor de ${tipoOperacao} deve ser um número`);
    }
    if (valor <= 0) {
      throw new Error(`Valor de ${tipoOperacao} deve ser maior que zero`);
    }
  }
}
