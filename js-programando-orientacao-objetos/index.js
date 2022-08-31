import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Wanuzia", "01122233346");/*Cria instancia da classe*/
const cliente2 = new Cliente("Alice", "33344455578");

const contaCorrenteWanuzia = new ContaCorrente(cliente1, "001");

contaCorrenteWanuzia.depositar(500);
const valorSacado = contaCorrenteWanuzia.sacar(50);

const conta2 = new ContaCorrente(cliente2, "102");

let valor = 100;
contaCorrenteWanuzia.transferir(valor, conta2);


console.log(contaCorrenteWanuzia, conta2)

/*
Tipo de valor => let valor;
Tipo de referência => variável conta2, por exemplo;
*/