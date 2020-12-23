/* Write a query to get the average salary for all departments employing more than 10 employees. */
SELECT ROUND(AVG(SALARY),2) AS avarage_salary, COUNT(*) AS number_employees, DEPARTMENT_ID
FROM employees
GROUP BY DEPARTMENT_ID
HAVING number_employees > 10;
