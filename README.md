# Tdd-Thiago-Emanuel

## Descrição

Projeto de exemplo para TDD (Test Driven Development) utilizando Node.js, Jest e módulos ES6. Inclui uma classe `ContaBancaria` e testes automatizados.

## Estrutura

```
tdd-thiago-emanuel/
├── src/
│   └── ContaBancaria.js
├── tests/
│   └── ContaBancaria.test.js
├── package.json
└── README.md
```

## Instalação

1. Entrar na pasta:
   ```sh
   cd tdd-thiago-emanuel
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Rodando os testes

Execute:

```sh
npm test
```

## Configuração ES6 + Jest

- O projeto está configurado com `type: "module"` no `package.json` para suportar `import/export`.
- O script de teste usa `node --experimental-vm-modules` para permitir que o Jest rode testes com módulos ES6.

## Autor

Thiago Emanuel
