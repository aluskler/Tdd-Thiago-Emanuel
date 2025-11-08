import ContaBancaria from "../src/ContaBancaria.js";

describe("ContaBancaria", () => {
  test("deve iniciar com saldo 0", () => {
    const conta = new ContaBancaria();
    expect(conta.getSaldo()).toBe(0);
  });
});
