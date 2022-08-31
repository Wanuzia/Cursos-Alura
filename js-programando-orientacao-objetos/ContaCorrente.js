import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0;
/*Adiciona comportamentos à classe com a criação de métodos.*/
    set cliente(cliente){
        if(cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this.saldo;
    }
    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
    
}