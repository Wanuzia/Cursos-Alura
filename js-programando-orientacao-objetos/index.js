import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();/*Cria instancia da classe*/
cliente1.nome = "Wanuzia";
cliente1.cpf = "01122233346";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "33344455578";

const contaCorrenteWanuzia = new ContaCorrente();
contaCorrenteWanuzia._saldo = 0;
contaCorrenteWanuzia.agencia = "001";
contaCorrenteWanuzia.cliente = cliente1;

contaCorrenteWanuzia.depositar(500);
const valorSacado = contaCorrenteWanuzia.sacar(50);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = "102";

let valor = 100;
contaCorrenteWanuzia.transferir(valor, conta2);


console.log(contaCorrenteWanuzia, conta2)

/*
Tipo de valor => let valor;
Tipo de referência => variável conta2, por exemplo;
*/