-- Após ter criado o índice, mensure o custo com a seguinte query:
show index from category;
USE sakila;
CREATE FULLTEXT INDEX index_category ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
DROP INDEX index_category ON category;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
