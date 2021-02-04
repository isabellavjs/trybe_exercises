/* Write a query to get the average salary for each job ID excluding programmer. */
SELECT ROUND(AVG(SALARY), 2) AS 'Avarage salary', JOB_ID
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG';
