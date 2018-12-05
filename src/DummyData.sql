-- CREATE DATABASE CS425;
-- USE CS425;

CREATE TABLE CUSTOMER(
	CID INT(9) NOT NULL auto_increment,
	FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    PHONE INT(10),
    EMAIL VARCHAR(50),
    PASS VARCHAR(50),
    INCOME INT(10),
    GENDER VARCHAR(1),
    PRIMARY KEY (CID),
    ST_NUM VARCHAR(10),
    ST VARCHAR(10),
    CITY VARCHAR(10),
    STATE VARCHAR(20),
    check(GENDER='F' or GENDER='M')
);


    
CREATE TABLE DEALER(
	DID VARCHAR(9),
	DNAME VARCHAR(20),
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
	VIN VARCHAR(9),
    BRAND VARCHAR(10),
    MODEL VARCHAR(10),
    COLOR VARCHAR(10),
    PRIMARY KEY(VIN));

CREATE TABLE VEHICLE_STOCK(
    DID VARCHAR(9),
    VIN VARCHAR(9),
    FOREIGN KEY(VIN) REFERENCES VEHICLE(VIN),
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
    
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, INCOME, GENDER, ST_NUM, ST, CITY,STATE) 
    values ('Test1', 'Subject1', 111, 'testsubject111@hawk', 'pass1', 10000, 'F', '1', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, INCOME, GENDER, ST_NUM, ST, CITY,STATE) 
    values ('Test2', 'Subject2', 222, 'testsubject222@hawk', 'pass2', 20000, 'F', '2', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, INCOME, GENDER, ST_NUM, ST, CITY,STATE) 
    values ('Test3', 'Subject3', 333, 'testsubject333@hawk', 'pass3', 30000, 'M', '3', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, INCOME, GENDER, ST_NUM, ST, CITY,STATE) 
    values ('Test4', 'Subject4', 444, 'testsubject444@hawk', 'pass4', 40000, 'M', '4', 'Test St', 'Chicago', 'IL');
-- SELECT CUSTOMERS WITH FIRST NAME OF ...
select * from CUSTOMER where FNAME='Test3';

insert into DEALER(DID, DNAME, CAPACITY) values ('DEAL01', 'SuperAuto1', 50);
insert into DEALER(DID, DNAME, CAPACITY) values ('DEAL02', 'SuperAuto2', 20);
insert into DEALER(DID, DNAME, CAPACITY) values ('DEAL03', 'SuperAuto3', 70);
insert into DEALER(DID, DNAME, CAPACITY) values ('DEAL04', 'SuperAuto4', 90);
-- SELECT DEALER THAT HAS MORE THAN 50 CAPACITY
select * from DEALER where CAPACITY>50;

insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp1', 'Loyee1', 'DEAL01', 'employee1@hotdeal', 'employee1');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp2', 'Loyee2', 'DEAL02', 'employee2@hotdeal', 'employee2');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp3', 'Loyee3', 'DEAL03', 'employee3@hotdeal', 'employee3');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp4', 'Loyee4', 'DEAL02', 'employee4@hotdeal', 'employee4');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp5', 'Loyee5', 'DEAL04', 'employee5@hotdeal', 'employee5');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp6', 'Loyee6', 'DEAL03', 'employee6@hotdeal', 'employee6');
-- SELECT EMPLOYEES THAT WORK IN DEALERS WITH MORE THAN 50 CAPACITY
select * from EMPLOYEE a where a.DID IN (select DID from DEALER where CAPACITY>50);

insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN01', 'TESLA', 'Model S', 'Violet');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN02', 'TESLA', 'Model S', 'Violet');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN03', 'TESLA', 'Model S', 'Blue');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN04', 'TESLA', 'Model S', 'White');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN05', 'TESLA', 'Model S', 'White');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN06', 'TESLA', 'Model X', 'Black');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN07', 'TESLA', 'Model 3', 'Blue');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN08', 'TESLA', 'Model X', 'Red');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN09', 'TESLA', 'Model X', 'White');
insert into VEHICLE(VIN, BRAND, MODEL, COLOR) values ('VIN10', 'TESLA', 'Model S', 'Violet');
-- SELECT WHITE CARS
select * from VEHICLE WHERE COLOR='White';

insert into SALES(VIN, CID, DID, EID) values ('VIN01', '2', 'DEAL01', 5);
insert into SALES(VIN, CID, DID, EID) values ('VIN02', '2', 'DEAL01', 5);
insert into SALES(VIN, CID, DID, EID) values ('VIN03', '3', 'DEAL02', 2);
insert into SALES(VIN, CID, DID, EID) values ('VIN04', '2', 'DEAL02', 3);
insert into SALES(VIN, CID, DID, EID) values ('VIN05', '3', 'DEAL02', 3);
select * from SALES;

insert into VEHICLE_STOCK(DID, VIN) values ('DEAL01', 'VIN01');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL01', 'VIN02');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL02', 'VIN03');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL02', 'VIN04');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL02', 'VIN05');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL02', 'VIN06');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL01', 'VIN07');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL03', 'VIN08');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL04', 'VIN09');
insert into VEHICLE_STOCK(DID, VIN) values ('DEAL04', 'VIN10');
-- HOW MANY STOCKS BY EACH DEALER
SELECT DID, COUNT(*) AS STOCKNUM FROM VEHICLE_STOCK GROUP BY DID;

-- STOCK INFORMATION
SELECT * FROM VEHICLE_STOCK WHERE VIN NOT IN (SELECT VIN FROM VEHICLE_STOCK NATURAL JOIN SALES);
-- SELECT * FROM VEHICLE_STOCK NATURAL JOIN SALES;
-- SELECT * FROM VEHICLE_STOCK

-- NUMBER OF STOCKS LEFT IN EACH DEALER
SELECT DID, COUNT(*) as STOCKS_LEFT 
FROM (SELECT * FROM VEHICLE_STOCK WHERE VIN NOT IN (SELECT VIN FROM VEHICLE_STOCK NATURAL JOIN SALES)) si
GROUP BY DID;