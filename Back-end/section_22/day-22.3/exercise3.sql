USE sakila;
DROP VIEW IF EXISTS address_info;
CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM address a
INNER JOIN city c ON c.city_id = a.city_id
ORDER BY c.city;

SELECT * FROM address_info;
