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
