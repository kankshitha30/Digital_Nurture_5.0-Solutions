BEGIN 
FOR rec IN(
SELECT c.Name, l.LoanID, l.EndDate
FROM Customers c
JOIN Loans l
ON c.CustomerID=l.CustomerID
WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE+30
)
LOOP
DBMS_OUTPUT.PUT_LINE(
'Reminder: Dear' ||rec.Name|| ', your loan' ||rec.LoanID|| 'is due on'|| TO_CHAR(rec.EndDate,'DD-MM-YYYY')
);
END LOOP;
END;
/