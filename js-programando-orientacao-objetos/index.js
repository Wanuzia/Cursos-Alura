class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    _saldo = 0;
/*Adiciona comportamentos à classe com a criação de métodos.*/
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor >0){
            this._saldo += valor;
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
contaCorrenteWanuzia._saldo = 0;
contaCorrenteWanuzia.agencia = 001;

contaCorrenteWanuzia.depositar(500);
contaCorrenteWanuzia.sacar(50);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteWanuzia.saldo)

