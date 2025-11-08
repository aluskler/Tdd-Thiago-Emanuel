import ContaBancaria from "../src/ContaBancaria.js";

describe("ContaBancaria", () => {
  test("deve iniciar com saldo 0", () => {
    const conta = new ContaBancaria();
    expect(conta.getSaldo()).toBe(0);
  });
});

test("deve permitir depósito de valor positivo", () => {
  const conta = new ContaBancaria();
  conta.depositar(100);
  expect(conta.getSaldo()).toBe(100);
});
