export class ContaCorrente {
    agencia;
    _saldo = 0;
/*Adiciona comportamentos à classe com a criação de métodos.*/
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    
}