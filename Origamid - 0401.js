// Transforme o objeto abaixo em uma Constructor Function
function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
      console.log(`${this.nome} andou`);
    }
  }
  
  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
  
  
 const joao = new Pessoa ('João', 20);
 const Maria = new Pessoa ('Maria', 25);
 const Bruno = new Pessoa ('Bruno', 15);

  
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
  
  
  function Aula (elementos, addClass, removeClass) {
    const select = document.querySelectorAll(elementos);
    this.selected = select;
    console.log(this.selected);
    this.addClass = this.selected.forEach (function (a) {a.classList.add(addClass)});
    this.removeClass = this.selected.forEach (function (a) {a.classList.remove(removeClass)});
  }


// Exercicio corrido e atualizado conforme instruções: 

  function Aula (elementos) {
    const select = document.querySelectorAll(elementos);
    this.selected = select;
    console.log(this.selected);
    this.add = function (addClass) {
      this.selected.forEach ((a) => {
        a.classList.add(addClass)});
    }
    this.rem = function (removeClass) {
      this.selected.forEach ((a) => {
        a.classList.remove(removeClass)})
    }
  }


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const Transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaT = 0;
let somaR = 0;


Transacoes.forEach((a) => {
  const taxa = "Taxa";
  const recebimento = "Recebimento";

  a.valor = a.valor.replace(/['R$']+/g, '');
  let valorA = parseInt(a.valor);

    if (a.descricao.includes(taxa)) {
      somaT += valorA;
    } else {
      somaR += valorA;
    } 
})

console.log(`A taxa total cobrada será de R$${somaT} e o total do recebimento do cliente será de R$${somaR}, formando um total de R$${somaT+somaR}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesA = transportes.split(';');

console.log(transportesA);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;


const htmlA = html.replace(/['span']+/g, 'a')
console.log (htmlA);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(--frase.length));

// Retorne o total de taxas
const Transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxaT = 0;

Transacoes2.forEach((a) => {
  aA = a.toLowerCase(); 
  aA = aA.trim();
  const taxa = 'taxa';
  console.log(aA)
  if (aA.includes(taxa)) {
    ++taxaT
  }
})

console.log(`A operação contem um total de ${taxaT} taxas`)



