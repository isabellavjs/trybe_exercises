/* Write a query to get the number of employees with the same job. */
SELECT COUNT(EMPLOYEE_ID) AS Number_employees, JOB_ID FROM employees
GROUP BY JOB_ID
HAVING Number_employees > 1;
