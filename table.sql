create table country(
  code char(3) primary key not null,
  name text not null,
  continent text not null,
  region text not null,
  population integer not null,
  capital integer
);

create table city (
    id serial primary key, 
    name text not null, 
    countrycode char(3) not null references country(code),
    district text not null, 
    population integer not null
);

create table countrylanguage (
  countrycode char(3) not null references country(code),
  language varchar(30) not null,
  isofficial boolean not null,
  percentage decimal not null,
  primary key(countrycode, language)
);

INSERT INTO country VALUES ('AFG','Afghanistan','Asia','Southern and Central Asia',652090.00);
INSERT INTO country VALUES ('NLD','Netherlands','Europe','Western Europe',41526.00);

INSERT INTO city VALUES (1,'Kabul','AFG','Kabol',1780000);
INSERT INTO city VALUES (2,'Qandahar','AFG','Qandahar',237500);
INSERT INTO city VALUES (3,'Herat','AFG','Herat',186800);
INSERT INTO city VALUES (4,'Mazar-e-Sharif','AFG','Balkh',127800);
INSERT INTO city VALUES (5,'Amsterdam','NLD','Noord-Holland',731200);
INSERT INTO city VALUES (6,'Rotterdam','NLD','Zuid-Holland',593321);
INSERT INTO city VALUES (7,'Haag','NLD','Zuid-Holland',440900);
INSERT INTO city VALUES (8,'Utrecht','NLD','Utrecht',234323);
INSERT INTO city VALUES (9,'Eindhoven','NLD','Noord-Brabant',201843);
INSERT INTO city VALUES (10,'Tilburg','NLD','Noord-Brabant',193238);

INSERT INTO countrylanguage VALUES ('AFG','Balochi','F',0.9);
INSERT INTO countrylanguage VALUES ('AFG','Dari','T',32.1);
INSERT INTO countrylanguage VALUES ('AFG','Pashto','T',52.4);
INSERT INTO countrylanguage VALUES ('AFG','Turkmenian','F',1.9);
INSERT INTO countrylanguage VALUES ('AFG','Uzbek','F',8.8);
INSERT INTO countrylanguage VALUES ('NLD','Arabic','F',0.9);
INSERT INTO countrylanguage VALUES ('NLD','Dutch','T',95.6);
INSERT INTO countrylanguage VALUES ('NLD','Fries','F',3.7);
INSERT INTO countrylanguage VALUES ('NLD','Turkish','F',0.8);


FIRST CLUE ====>
Find cities in Europe where country name is Netherlands

QUERY ====>
select city.name from city inner join country on city.countrycode = country.code where country.name = 'Netherlands';
