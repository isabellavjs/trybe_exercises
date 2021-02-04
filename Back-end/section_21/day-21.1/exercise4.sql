/* Write a query to get the maximum salary of an employee working as a Programmer. */
SELECT MAX(SALARY) AS 'Maximum salary - programmer'
FROM employees
WHERE JOB_ID = 'IT_PROG';
