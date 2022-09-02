**Nesse curso vamos usar o exemplo de arquivo CSV, ou Comma-separated Values.**

## Pegando um cpf
\d => 'd' de dígito => pega um dígito;
o ponto significa qqr caracter, se queremos o valor literal do ponto utilizamos \. => meta caracter
quantifier = conjunto de caracters especiais para definir quantas vezes um caracter deve ser encontrado:
\d{3} => pega a sequencia de 3 dígitos.
O asterisco (*) é outro meta-char com o significado "zero, um ou mais vezes". Ao adicionar o asterisco (*), conseguimos definir a quantidade, por isso ele também é chamado de quantifier. O ponto (.) e asterisco (*) fazem parte dos metacaracteres.
-Logo:
```
\d{3}\.\d{3}\.\d{3}\-\d{2}
```
## Pegando IP
- Um IP tem quatro grupos de no mínimo um e máximo três números. Repare que estamos escapando o ponto (.) entre os números, que são blocos de dígitos \d entre 1 e 3 caracteres {1,3}
```
\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}
```
## Regex para pegar o CEP no CSV abaixo:
- João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro;
- Um CEP não há muito mistério, são 5 dígitos -(hífen) 3 dígitos.
```
\d{5}-\d{3}
```

### Buscando o telefone

- "Usando o que aprendemos até então, qual padrão podemos utilizar para encontrar o número telefônico? Por exemplo: (21) 3216-2345. Lembre-se que os telefones podem ser também no formato novo: (21) 93216-2345. Seu padrão deve considerar esta modificação. Dica: Os parênteses são meta-chars e precisam ser utilizados para capturar o valor literal: \(e \)"

- Regex correta: \(\d{2}\) \d{4}-\d{4}

- A regex não está perfeita pois o telefone poderia variar, por exemplo ter com 9 números ou um 0 na frente do DDD (além de definir melhor o espaço).

### Para que servem Regex?
- A) Extraindo seções específicas de um arquivo de texto
- B) Validação de formatação de, por exemplo, e-mail ou telefone
- C) Análise de arquivos de texto e extração de dados para, por exemplo, gravar no banco de dados
- D) Substituindo os valores de um texto para limpar, reformatar ou alterar o conteúdo

#### Resumo desta aula:
-  Uma classe de caracteres predefinida é \d, que significa qualquer dígito.
- Existem vários meta-char, como . ou *.
- Existem quantifiers que definem quantas vezes um caractere deve aparecer:
- {1} é um quantifier que significa uma vez.
- * é um quantifier que significa zero, uma ou mais vezes
- . é um meta-char que significa qualquer char.
- Com \ podemos escapar meta-chars, por exemplo \..

