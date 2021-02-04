/* Write a query to list the number of jobs available in the employees table. */
SELECT COUNT(DISTINCT JOB_ID) AS 'Jobs available' FROM employees;

/* Number of Jobs per position */
SELECT JOB_ID, COUNT(JOB_ID) AS 'Number of Jobs' FROM employees
GROUP BY JOB_ID;
