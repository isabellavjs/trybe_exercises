USE sakila;
DROP VIEW IF EXISTS movies_languages;
CREATE VIEW movies_languages AS 
SELECT f.title, l.language_id, l.name 
FROM film f
INNER JOIN language l ON l.language_id = f.language_id;
SELECT * FROM movies_languages;
