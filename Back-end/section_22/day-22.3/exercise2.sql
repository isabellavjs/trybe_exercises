DROP VIEW IF EXISTS film_info;
CREATE VIEW film_info AS
SELECT a.actor_id,
CONCAT(a.first_name, ' ', a.last_name) AS actor,
f.title
FROM actor a
INNER JOIN film_actor fc ON fc.actor_id = a.actor_id
INNER JOIN film f ON f.film_id = fc.film_id
ORDER BY actor;

SELECT * FROM film_info;
