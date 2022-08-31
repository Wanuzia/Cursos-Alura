class Cliente {
    nome;
    cpf;

}
class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}


const cliente1 = new Cliente();/*Cria instancia da classe*/
cliente1.nome = "Wanuzia";
cliente1.cpf = 111122233344456;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 33344455566678;

const contaCorrenteWanuzia = new ContaCorrente();
contaCorrenteWanuzia.saldo = 0;
contaCorrenteWanuzia.agencia = 001;

contaCorrenteWanuzia.saldo = 500;
contaCorrenteWanuzia.sacar(50);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteWanuzia.saldo)

