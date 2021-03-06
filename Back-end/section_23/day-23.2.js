// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
db.superheroes.find({"aspects.height": {$lt: 180}});

// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.find({"aspects.height": {$lt: 180}}).count();
// RE: 836

// Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.find({"aspects.height": {$lte: 180}}).count();
// RE: 459

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.findOne({"aspects.height": {$gte: 200}})

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.find({"aspects.height": {$gte: 200}}).count();
// RE 59

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({"aspects.eyeColor": 'green'});

// Exercício 8: Retorne o total de super-heróis com olhos azuis.
db.superheroes.find({"aspects.eyeColor": 'blue'}).count();

// Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find({"aspects.hairColor": {$in: ["Black", "No hair"]}});

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ) - CHECAR.
db.superheroes.find({"aspects.hairColor": {$in: ["black", "No hair"]}}).count();

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas - CHECAR
db.superheroes.find({"aspects.hairColor": {$nin: ["Black", "No hair"]}}).count();

// Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.find({"aspects.height": {$not: { $gt: 180 }}}).count();
// RE 696

// Exercício 13: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m - CHECAR
db.superheroes.find({
  $and: [
      { "race": { $not: {$eq: "human" }} },
      { "aspects.height": { $not: {$gt: 180} } }
  ]
})

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics - CHECAR
db.superheroes.find({
  $and: [
      { "publisher": {$eq: "Marvel Comics" } },
      { "aspects.height": { $in: [180, 200] } }
  ]
});

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
db.superheroes.find({
  $and: [
      { "race": {in: ["Human", "Mutant"] } },
      { "publisher": { $not: {$eq: "DC Comics"} } },
      { "aspects.weight": { $gt: 80, $lt: 100 } }
  ]
});

// Exercício 16: Retorne o total de documentos que não contêm o campo race .
db.superheroes.find({"race": {$exists: false}}).count();
// RE 304

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
db.superheroes.find({"aspects.hairColor": {$exists: true}}).count();
// RE 562

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
db.superheroes.deleteOne({"publisher": "Sony Pictures"});

// Exercício 19: Remova todos os documentos publicados pelo George Lucas .
db.superheroes.deleteMany({"publisher": "George Lucas"});
