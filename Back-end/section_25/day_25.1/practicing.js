db.articles.insertMany([
{ _id: ObjectId("512bc95fe835e68f199c8686"), author: "dave", score: 80, views: 100 },
{ _id: ObjectId("512bc962e835e68f199c8687"), author: "dave", score: 85, views: 521 },
{ _id: ObjectId("55f5a192d4bede9ac365b257"), author: "ahn", score: 60, views: 1000 },
{ _id: ObjectId("55f5a192d4bede9ac365b258"), author: "li", score: 55, views: 5000 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b259"), author: "annT", score: 60, views: 50 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b25a"), author: "li", score: 94, views: 999 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b25b"), author: "ty", score: 95, views: 1000 }
]);

// igualdade simples: aggregation com o $match
db.articles.aggregate(
  [{ $match : { author : "dave" } }]
);


//Igualdade complexa: utilizar operadores de filtro dentro do $match
db.articles.aggregate([
  {
    $match: {
      $or: [
          { score: { $gt: 70, $lt: 90 } },
          { views: { $gte: 1000 } }
      ]
    }
  }
]);

//$limit: limita o número de documentos que passará para o próximo estágio do pipeline.
db.articles.aggregate(
  [
    { $limit : 5 }
  ]
);

// Fixação 1: Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate([
  { $match: { from: "Dave America" } }
]);

// Fixação 2: Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate([
  {
    $match: {
      $or: [
        { to: "Lisa Simpson" },
        { value: { $gt: 700, $lt: 6000 } },
      ]
    }
  }
]);

// Fixação 3: Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([
  {
    $match: { value: { $gt: 1000 } },
  },
  { $limit: 3 }
]);

// Exemplos $lookup
db.orders.insertMany([
{ _id: 1, item: "almonds", price: 12, quantity: 2 },
{ _id: 2, item: "pecans", price: 20, quantity: 1 },
{ _id: 3 }
]);

db.inventory.insertMany([
{ _id: 1, sku: "almonds", description: "product 1", instock: 120 },
{ _id: 2, sku: "bread", description: "product 2", instock: 80 },
{ _id: 3, sku: "cashews", description: "product 3", instock: 60 },
{ _id: 4, sku: "pecans", description: "product 4", instock: 70 },
{ _id: 5, sku: null, description: "Incomplete" },
{ _id: 6 }
]);

// Retornando em uma única query os documentos de orders e inventory
db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

db.orders.updateOne(
  { _id: 3 },
  { $set: { item: "cookies", price: 10, ordered: 60 } }
);

db.warehouses.insertMany([
{ _id: 1, stock_item: "almonds", warehouse: "A", instock: 120 },
{ _id: 2, stock_item: "pecans", warehouse: "A", instock: 80 },
{ _id: 3, stock_item: "almonds", warehouse: "B", instock: 60 },
{ _id: 4, stock_item: "cookies", warehouse: "B", instock: 40 },
{ _id: 5, stock_item: "cookies", warehouse: "A", instock: 80 }
]);

// A operação a seguir junta todos os documentos da coleção orders com a coleção warehouse através do campo item se a quantidade em estoque ( instock ) for suficiente para cobrir a quantidade vendida ( ordered ). Os documentos que dão match são colocados no campo stockdata .
db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
          $expr: {
          $and: [
            { $eq: [ "$stock_item",  "$$order_item" ] },
            { $gte: [ "$instock", "$$order_qty" ] }
          ]
          }
          }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);

// clients
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

// transactions
db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'floridaBank' },
]);

// Fixação 1:
// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { client_name: "$name" },
      pipeline: [
        {
          $match: { 
            $expr: { $eq: ["$from", "$$client_name"] }
          }
        },
        { $project: { _id: 0, from: 0 } }
      ],
      as: "client_data"
    }
  }
]);

// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { client_name: "$name" },
      pipeline: [
        {
          $match: { 
            $expr: { $eq: ["$to", "$$client_name"] }
          }
        },
        { $project: { _id: 0, to: 0 } }
      ],
      as: "client_data_received"
    }
  },
  { $limit: 4 }
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      let: { client_name: "$name" },
      pipeline: [
        {
          $match: { 
            $expr: { $eq: ["$to", "$$client_name"] }
          }
        },
        { $project: { _id: 0, to: 0 } }
      ],
      as: "client_data_received"
    }
  }
]);

// Operador $group
db.sales.insertMany(
  [
    {
      _id: 1,
      item: "abc",
      price: NumberDecimal("10"),
      quantity: NumberInt("2"),
      date: ISODate("2014-03-01T08:00:00Z")
    },
    {
      _id: 2,
      item: "jkl",
      price: NumberDecimal("20"),
      quantity: NumberInt("1"),
      date: ISODate("2014-03-01T09:00:00Z")
    },
    {
      _id: 3,
      item: "xyz",
      price: NumberDecimal("5"),
      quantity: NumberInt( "10"),
      date: ISODate("2014-03-15T09:00:00Z")
    },
    {
      _id: 4,
      item: "xyz",
      price: NumberDecimal("5"),
      quantity:  NumberInt("20"),
      date: ISODate("2014-04-04T11:21:39.736Z")
    },
    {
      _id: 5,
      item: "abc",
      price: NumberDecimal("10"),
      quantity: NumberInt("10"),
      date: ISODate("2014-04-04T21:23:13.331Z")
    },
    {
      _id: 6,
      item:"def",
      price: NumberDecimal("7.5"),
      quantity: NumberInt("5" ),
      date: ISODate("2015-06-04T05:08:13Z")
    },
    {
      _id: 7,
      item: "def",
      price: NumberDecimal("7.5"),
      quantity: NumberInt("10"),
      date: ISODate("2015-09-10T08:43:00Z")
    },
    {
      _id: 8,
      item: "abc",
      price: NumberDecimal("10"),
      quantity: NumberInt("5" ),
      date: ISODate("2016-02-06T20:20:13Z")
    }
  ]
);

// contando documentos com o $group. Obs: _id: null seleciona todos os documents
db.sales.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);

// encontrando valores distintos de um campo
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

// calculando o total de vendas
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// filtrando dados após o agrupamento
db.sales.aggregate([
  {
    $group: {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

// usando o null para realizar operações em todos os documents
db.sales.aggregate([
  {
    $group : {
      _id : null,
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);

// Exercicios de fixação - $group
// Selecione todos os bancos;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",

    }
  }
]);

// Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalTransaction: {
        $sum: "$value"
      },
      count: { $sum: 1 }
    }
  }
]);

// Selecione o valor total de transações;
db.transactions.aggregate([
  {
    $group: {
      _id: null,
      totalTransaction: {
        $sum: "$value"
      },
    }
  }
]);

// Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalTransaction: {
        $sum: "$value"
      },
      count: { $sum: 1 }
    }
  },
  {
    $match: { "totalTransaction": { $gt: 1000 } }
  }
]);

// operador $unwind
db.inventory.aggregate([{ $unwind : "$sizes" }]);

// operador project
db.books.insertOne(
  {
    title: "abc123",
    isbn: "0001122223334",
    author: { last: "zzz", first: "aaa" },
    copies: 5
  }
)

// incluindo apenas title e author no document de saída
db.books.aggregate(
  [
    {
      $project : {
        title : 1,
        author : 1
      }
    }
  ]
);

db.books.aggregate([
  {
    $project : {
      _id: 0,
      title : 1,
      author : 1
    }
  }
]);

db.books.aggregate([
  {
    $project : {
      copies: 0
    }
  }
]);