// 1. Crie um algoritmo JavaScript que filtre os dados do array, retornando apenas os números pares.
// ENTRADA: [2, 3, 5, 10, 7, 8, 90, 4, 2, 7, 8, 60, 45, 71, 23]
// SAÍDA: [2, 10, 8, 90, 4, 2, 8, 60]

{
  const arr = [2, 3, 5, 10, 7, 8, 90, 4, 2, 7, 8, 60, 45, 71, 23]

  const pairNumbers = arr.filter(n => n%2 == 0);
  console.log(pairNumbers);
}

// 2. Utilizando a função de arrays map, retorne apenas o nome das frutas.
// ENTRADA: [{nome: "banana", cor: "amarelo"}, {nome: "maca", cor: "vermelho"}, {nome: "uva", cor: "roxo"}]
// SAIDA: ["banana", "maca", "uva"]

{
  const lista = [
    {nome: "banana", cor: "amarelo"}, 
    {nome: "maca", cor: "vermelho"}, 
    {nome: "uva", cor: "roxo"}
  ];

  const nomes = [];
  lista.forEach(fruta => {
    nomes.push(fruta.nome);
  })

}