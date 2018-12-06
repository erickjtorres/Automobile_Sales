CREATE DATABASE CS425;
USE CS425;

CREATE TABLE CUSTOMER(
	CID INT(9) NOT NULL auto_increment,
	FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    PHONE INT(10),
    EMAIL VARCHAR(50),
    PASS VARCHAR(50),
    PRIMARY KEY (CID),
    ST_NUM VARCHAR(10),
    ST VARCHAR(10),
    CITY VARCHAR(10),
    STATE VARCHAR(20)
);


    
CREATE TABLE DEALER(
	DID VARCHAR(9),
	FNAME VARCHAR(20),
    CAPACITY INT(100),
    PRIMARY KEY(DID)
    );

CREATE TABLE EMPLOYEE(
	EID INT(9) NOT NULL AUTO_INCREMENT,
    FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    DID VARCHAR(9),
	EMAIL VARCHAR(50),
    PASS VARCHAR(50),
    PRIMARY KEY(EID),
    FOREIGN KEY(DID) REFERENCES DEALER(DID)
);


CREATE TABLE VEHICLE(
	VIN INT(9) NOT NULL AUTO_INCREMENT,
    DID VARCHAR(9),
    BRAND VARCHAR(10),
    MODEL VARCHAR(10),
    COLOR VARCHAR(10),
    STOCK INT(10),
    PRIMARY KEY(VIN),
    FOREIGN KEY(DID) REFERENCES DEALER(DID));
    
CREATE TABLE SALES(
	VIN VARCHAR(9),
    CID VARCHAR(9),
    DID VARCHAR(9),
    EID VARCHAR(9),
    PRIMARY KEY(VIN),
    FOREIGN KEY (VIN) REFERENCES VEHICLE(VIN),
    FOREIGN KEY (CID) REFERENCES CUSTOMER(CID),
    FOREIGN KEY (DID) REFERENCES DEALER(DID),
    FOREIGN KEY (EID) REFERENCES EMPLOYEE(EID));
    
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test1', 'Subject1', 111, 'testsubject111@hawk', 'pass1', '1', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test2', 'Subject2', 222, 'testsubject222@hawk', 'pass2', '2', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test3', 'Subject3', 333, 'testsubject333@hawk', 'pass3', '3', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test4', 'Subject4', 444, 'testsubject444@hawk', 'pass4', '4', 'Test St', 'Chicago', 'IL');
-- SELECT CUSTOMERS WITH FIRST NAME OF ...
-- select * from CUSTOMER where FNAME='Test3';

insert into DEALER(DID, FNAME, CAPACITY) values ('DEAL01', 'SuperAuto1', 50);
insert into DEALER(DID, FNAME, CAPACITY) values ('DEAL02', 'SuperAuto2', 20);
insert into DEALER(DID, FNAME, CAPACITY) values ('DEAL03', 'SuperAuto3', 70);
insert into DEALER(DID, FNAME, CAPACITY) values ('DEAL04', 'SuperAuto4', 90);
-- SELECT DEALER THAT HAS MORE THAN 50 CAPACITY
-- select * from DEALER where CAPACITY>50;

insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp1', 'Loyee1', 'DEAL01', 'employee1@hotdeal', 'employee1');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp2', 'Loyee2', 'DEAL02', 'employee2@hotdeal', 'employee2');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp3', 'Loyee3', 'DEAL03', 'employee3@hotdeal', 'employee3');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp4', 'Loyee4', 'DEAL02', 'employee4@hotdeal', 'employee4');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp5', 'Loyee5', 'DEAL04', 'employee5@hotdeal', 'employee5');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp6', 'Loyee6', 'DEAL03', 'employee6@hotdeal', 'employee6');
-- SELECT EMPLOYEES THAT WORK IN DEALERS WITH MORE THAN 50 CAPACITY
-- select * from EMPLOYEE a where a.DID IN (select DID from DEALER where CAPACITY>50);

insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL01', 'TESLA', 'Model S', 'Violet', 44);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL02', 'TESLA', 'Model S', 'Violet', 20);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL02', 'TESLA', 'Model S', 'Blue', 15);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL03', 'TESLA', 'Model S', 'White', 150);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL04', 'TESLA', 'Model S', 'White', 50);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL02', 'TESLA', 'Model X', 'Black', 40);
insert into VEHICLE(DID, BRAND, MODEL, COLOR, STOCK) values ('DEAL04', 'TESLA', 'Model 3', 'Blue', 90);
-- SELECT ALL WHITE CARS.
-- select * from VEHICLE WHERE COLOR='White';

insert into SALES(VIN, CID, DID, EID) values ('1', '2', 'DEAL01', 5);
insert into SALES(VIN, CID, DID, EID) values ('2', '2', 'DEAL01', 5);
insert into SALES(VIN, CID, DID, EID) values ('3', '3', 'DEAL02', 2);
insert into SALES(VIN, CID, DID, EID) values ('4', '2', 'DEAL02', 3);
insert into SALES(VIN, CID, DID, EID) values ('5', '3', 'DEAL02', 3);
-- select * from SALES;

-- When a customer opens his page:
-- We'll have to pull the purchases he made.
-- And maybe the options we have i.e. "TESLA" "MODEL S" "White" is in stock.

-- Gives all purchases by Customer ID "2".
SELECT * FROM SALES WHERE CID='2'; 
-- Gives all vehicle specifications purchased by 2. (Likely we can use.)
SELECT s.VIN, s.DID, BRAND, MODEL, COLOR FROM SALES s JOIN VEHICLE v ON s.VIN=v.VIN WHERE CID='2'; 
-- Shows stock information (Only ones in stock)
SELECT BRAND, MODEL, COLOR FROM VEHICLE GROUP BY BRAND, MODEL, COLOR HAVING sum(STOCK)>0;
-- Or alternatively, this gives how many available too:
SELECT BRAND, MODEL, COLOR, sum(STOCK) as STOCK_SUM FROM VEHICLE GROUP BY BRAND, MODEL, COLOR HAVING sum(STOCK)>0; 



-- When an employee opens his page:
-- He'll see his sales history.
-- Also stock information that's related to his dealer. (Car types and # of Stock available)

-- Employee ID "5"s sales history.
SELECT * FROM SALES WHERE EID='5'; 

-- Stock information for the DID = DEAL02. Maybe add one more step to get it directly from EID.
-- SELECT DID FROM EMPLOYEE WHERE EID='5';
-- Added one more step. Given an EID (here is '5') return the stock information of the dealership with vehicle specifications.
SELECT BRAND, MODEL, COLOR, sum(STOCK) 
FROM (SELECT * FROM VEHICLE 
      WHERE DID=(SELECT DID FROM EMPLOYEE WHERE EID='5')) EMP_TO_DEAL 
GROUP BY BRAND, MODEL, COLOR;