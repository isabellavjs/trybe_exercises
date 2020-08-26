const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function smallerName() {
  // Variavel que recebera o valor de menor nome
  let nameBook;
  //  Variavel que armazena o tamanho do titulo (name) do primeiro livro do arrayBooks (arrayBooks[0])
  let shortestTitleLength = books[0].name.length;

  books.forEach(item => {
    // Variavel que armazena o tamanho do titulo (name) no valor item (item = cada objeto armazenado no arrayBooks)
    let book = item.name.length;
    // Comparar se o tamanho de book e menor que o tamanho do titulo do primeiro livro do arrayBooks. Se verdadeiro, atribuir o valor de book ao livro com titulo mais curto, e atualizar a variavel nameBook com esse item.
    if (book < shortestTitleLength) {
      shortestTitleLength = book;
      nameBook = item.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.equal(smallerName(), 'Duna');