/* Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000 */
SELECT JOB_ID, MAX(SALARY) AS maximum_salary
FROM employees
GROUP BY JOB_ID
HAVING maximum_salary >= 4000;
