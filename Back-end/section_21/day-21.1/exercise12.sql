/* Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only. */
SELECT SUM(SALARY) AS sum_salary, MAX(SALARY) AS maximum_salary, MIN(SALARY) AS min_salary, ROUND(AVG(SALARY), 2) AS avarage_salary
FROM employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID = 90;