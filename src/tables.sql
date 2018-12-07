CREATE DATABASE CS425;
USE CS425;

CREATE TABLE CUSTOMER(
	CID INT(9) NOT NULL auto_increment,
	FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    GENDER VARCHAR(10),
    INCOME INT(15),
    PHONE VARCHAR(10),
    EMAIL VARCHAR(50),
    PASS VARCHAR(50),
    PRIMARY KEY (CID),
    ST_NUM VARCHAR(10),
    ST VARCHAR(10),
    CITY VARCHAR(10),
    STATE VARCHAR(20)
);


    
CREATE TABLE DEALER(
	DID INT(9),
	FNAME VARCHAR(20),
    CAPACITY INT(100),
    PRIMARY KEY(DID)
    );

CREATE TABLE EMPLOYEE(
	EID INT(9) NOT NULL AUTO_INCREMENT,
    FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    DID INT(9),
	EMAIL VARCHAR(50),
    PASS VARCHAR(50),
    PRIMARY KEY(EID),
    FOREIGN KEY(DID) REFERENCES DEALER(DID)
);


CREATE TABLE VEHICLE(
	VIN INT(9) NOT NULL AUTO_INCREMENT,
    DID INT(9),
    BRAND VARCHAR(10),
    MODEL VARCHAR(10),
    COLOR VARCHAR(10),
    PRIMARY KEY(VIN),
    FOREIGN KEY(DID) REFERENCES DEALER(DID));
    
CREATE TABLE SALES(
	VIN INT(9),
    CID INT(9),
    DID INT(9),
    EID INT(9),
    DOS DATE,
    PRIMARY KEY(VIN),
    FOREIGN KEY (VIN) REFERENCES VEHICLE(VIN),
    FOREIGN KEY (CID) REFERENCES CUSTOMER(CID),
    FOREIGN KEY (DID) REFERENCES DEALER(DID),
    FOREIGN KEY (EID) REFERENCES EMPLOYEE(EID));
    
DROP TABLE SALES;
DROP TABLE ADDRESS;
DROP TABLE VEHICLE;
DROP TABLE EMPLOYEE;
DROP TABLE CUSTOMER; 
DROP TABLE ADDRESS;
DROP TABLE DEALER;
DROP TABLE PHONE_NUMBER;

insert into DEALER(DID, FNAME, CAPACITY) values (1 ,'SuperAuto1', 50);

insert into CUSTOMER(FNAME, LNAME,GENDER, INCOME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test1', 'Subject1', 'M', 10100, '111', 'testsubject111@hawk', 'pass1', '1', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME,GENDER, INCOME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test2', 'Subject2', 'M', 10200, '222', 'testsubject222@hawk', 'pass2', '2', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME,GENDER, INCOME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test3', 'Subject3', 'M', 10300, '333', 'testsubject333@hawk', 'pass3', '3', 'Test St', 'Chicago', 'IL');
insert into CUSTOMER(FNAME, LNAME,GENDER, INCOME, PHONE, EMAIL, PASS, ST_NUM, ST, CITY,STATE) 
    values ('Test4', 'Subject4', 'M', 10400, '444', 'testsubject444@hawk', 'pass4', '4', 'Test St', 'Chicago', 'IL');


insert into DEALER(DID, FNAME, CAPACITY) values (1, 'SuperAuto1', 50);
insert into DEALER(DID, FNAME, CAPACITY) values (2, 'SuperAuto2', 20);
insert into DEALER(DID, FNAME, CAPACITY) values (3, 'SuperAuto3', 70);
insert into DEALER(DID, FNAME, CAPACITY) values (4, 'SuperAuto4', 90);


insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp1', 'Loyee1', 1, 'employee1@hotdeal', 'employee1');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp2', 'Loyee2', 2, 'employee2@hotdeal', 'employee2');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp3', 'Loyee3', 3, 'employee3@hotdeal', 'employee3');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp4', 'Loyee4', 2, 'employee4@hotdeal', 'employee4');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp5', 'Loyee5', 4, 'employee5@hotdeal', 'employee5');
insert into EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) values ('Emp6', 'Loyee6', 3, 'employee6@hotdeal', 'employee6');


insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (1, 'TESLA', 'Model S', 'Violet');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (2, 'TESLA', 'Model S', 'Violet');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (2, 'TESLA', 'Model S', 'Blue');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (3, 'TESLA', 'Model S', 'White');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (4, 'TESLA', 'Model S', 'White');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (2, 'TESLA', 'Model X', 'Black');
insert into VEHICLE(DID, BRAND, MODEL, COLOR) values (4, 'TESLA', 'Model 3', 'Blue');

insert into SALES(VIN, CID, DID, EID, DOS) values (1, 2, 1, 5, '2000-10-10');
insert into SALES(VIN, CID, DID, EID, DOS) values (2, 2, 1, 5, '2002-10-10');
insert into SALES(VIN, CID, DID, EID, DOS) values (3, 3, 2, 2, '2003-10-10');
insert into SALES(VIN, CID, DID, EID, DOS) values (4, 2, 2, 3, '2015-10-04');
insert into SALES(VIN, CID, DID, EID, DOS) values (5, 3, 2, 3, '2018-11-11');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON CS425.* TO 'root'@'localhost';

