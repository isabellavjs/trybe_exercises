/* Write a query to get the department ID and the total salary payable in each department. */
SELECT DEPARTMENT_ID, SUM(SALARY) AS 'Total pyable salary'
FROM employees
GROUP BY DEPARTMENT_ID;
