/* Write a query to get the average salary and number of employees working the department 90. */
SELECT ROUND(AVG(SALARY), 2) AS 'Average salary', COUNT(EMPLOYEE_ID) AS 'Number of employees'
FROM employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID = 90;
