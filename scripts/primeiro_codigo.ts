console.log("Hellow World");

console.log("===================");

const nome = "Joao";

console.log("Olá " + nome + ". Seja bem vindo!");

console.log("===================");
console.log("Criando class com TypeScript");

class Produto {
  nome: string;
  valor: number;
  constructor(produtoNome: string, produtoValor: number) {
    this.nome = produtoNome;
    this.valor = produtoValor;
  }
}