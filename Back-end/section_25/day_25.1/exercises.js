// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
db.clientes.aggregate([
  {
    $match: { sexo: "MASCULINO" }
  }
]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .
db.clientes.aggregate([
  {
    $match: {
      $and: [
        { sexo: "FEMININO" },
        { dataNascimento: { $gte: ISODate("1995-01-01"), $lte: ISODate("2005-12-31") } }
      ]
    }
  },
  {
    $project: { _id: 0 }
  }
]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
db.clientes.aggregate([
  {
    $match: {
      $and: [
        { sexo: "FEMININO" },
        { dataNascimento: { $gte: ISODate("1995-01-01"), $lte: ISODate("2005-12-31") } }
      ]
    }
  },
  {
    $project: { _id: 0 }
  },
  {
    $limit: 5
  }
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.aggregate([
  {
    $match: { "endereco.uf": "SC" }
  },
  {
    $group: {
      _id: "$endereco.uf",
      total_clientes: { $sum: 1 }
    }
  },
  {
    $project: { _id: 1, total_clientes: 1 }
  }
]);

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total_clientes: { $sum: 1 }
    }
  },
  {
    $project: { _id: 1, total_clientes: 1 }
  }
]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .
db.clientes.aggregate([
  {
    $group: {
      _id: { uf: "$endereco.uf", sexo: "$sexo" },
      total: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.uf": 1 }
  },
  {
    $project: { _id: 1, total: 1 }
  }
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

db.clientes.aggregate([
  {
    $group: {
      _id: { estado: "$endereco.uf", sexo: "$sexo" },
      total: { $sum: 1 }
    }
  },
  {
    $project: { _id: 0, "estado": "$_id.estado", "sexo": "$_id.sexo", total: 1 }
  },
  {
    $sort: { "estado": 1 }
  }
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.vendas.aggregate([
  {
    $group: {
      _id: { cliente_id: "$clienteId" },
      valorTotal: { $sum: "$valorTotal" }
    }
  },
  { $sort: { "valorTotal": -1 } },
  { $project: { _id: 0, "cliente_id": "$_id.cliente_id", valorTotal: 1 } },
  { $limit: 5 },
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
db.vendas.aggregate([
  {
    $match: {
      $and: [
        { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } },
        { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } },
      ]
    }
  },
  {
    $group: {
      _id: { cliente_id: "$clienteId" },
      valorTotal: { $sum: "$valorTotal" }
    }
  },
  { $sort: { "valorTotal": -1 } },
  { $project: { _id: 0, "cliente_id": "$_id.cliente_id", valorTotal: 1 } },
  { $limit: 10 },
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
    }
  },
  {
    $group: {
      _id: { clientes: "$clienteId" },
      total: { $sum: 1 },
    }
  },
  {
    $project: { _id: 0, "clientes": "$_id.clientes", total: 1 }
  },
  {
    $match: {
      total: { $gt: 5 }
    }
  },
  {
    $count: "clientes"
  }
]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .
db.vendas.aggregate([
  {
    $match: {
      $and: [
        { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } },
        { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-03-31") } },
      ]
    }
  },
  {
    $group: {
      _id: { clientes: "$clienteId" },
      total: { $sum: 1 },
    }
  },
  {
    $project: { _id: 0, "clientes": "$_id.clientes", total: 1 }
  },
  {
    $match: {
      total: { $gt: 3 }
    }
  },
  {
    $count: "clientes"
  }
]);

// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
db.vendas.aggregate([
  {
    $match: {
      $and: [
        { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } },
        { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") } },
      ]
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "vendas_clientes"
    }
  },
  {
    $unwind: "$vendas_clientes"
  },
  {
    $group: {
      _id: "$vendas_clientes.endereco.uf",
      totalVendas: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1,
    }
  },
  {
    $sort: { totalVendas: -1 }
  },
  {
    $limit: 3
  }
]);

// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
db.vendas.aggregate([
  {
    $match: {
      $and: [
        { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } },
        { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } },
      ]
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "vendas_clientes"
    }
  },
  {
    $unwind: "$vendas_clientes"
  },
  {
    $group: {
      _id: "$vendas_clientes.endereco.uf",
      totalVendas: { $sum: 1 },
      mediaVendas: { $avg: "$valorTotal" }
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1,
      mediaVendas: 1
    }
  },
  {
    $sort: { totalVendas: -1 }
  }
]);