/* Write a query to get the highest, lowest, sum, and average salary of all employees. */
SELECT MAX(SALARY) AS 'Highest salary', MIN(SALARY) AS 'Lowest salary', SUM(SALARY) AS 'Sum of salaries', ROUND(AVG(SALARY), 2) AS 'Avarage salaries'
FROM employees;
