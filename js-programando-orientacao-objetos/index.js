class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Wanuzia";
cliente1.cpf = 111122233344456;
cliente1.agencia = 003;
cliente1.saldo = 1000;

cliente2.nome = "Alice";
cliente2.cpf = 33344455566678;
cliente2.agencia = 004;
cliente2.saldo = 5000;

console.log(cliente1, cliente2)