SHOW INDEX FROM address;
USE sakila;
CREATE FULLTEXT INDEX postal_index ON address(postal_code);
SELECT * FROM sakila.address
WHERE MATCH(postal_code)  AGAINST('36693');

-- Mensure o custo com a seguinte query:
DROP INDEX postal_index ON address;
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
