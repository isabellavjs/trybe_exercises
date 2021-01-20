DROP VIEW IF EXISTS film_with_categories;

CREATE VIEW film_with_categories AS
SELECT f.title, c.category_id, c.name 
FROM category c
INNER JOIN film_category fc ON fc.category_id = c.category_id
INNER JOIN film f ON f.film_id = fc.film_id
ORDER BY f.title;
SELECT * FROM film_with_categories;
