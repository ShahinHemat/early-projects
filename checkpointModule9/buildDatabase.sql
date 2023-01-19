-- Oppg. 1b)

CREATE TABLE tool (
	ID CHAR(2),
	Name TEXT,
	Developer TEXT,
	PRIMARY KEY (ID)
);

CREATE TABLE language (
	ID SERIAL,
	Name TEXT,
	Year INTEGER,
	Creator TEXT,
	ToolID CHAR(2),
	PRIMARY KEY (ID),
	FOREIGN KEY (ToolID) REFERENCES tool(ID)
);

INSERT INTO tool
VALUES
('VS', 'Visual Studio Code', 'Microsoft'),
('IJ', 'IntelliJ', 'JetBrains');

INSERT INTO language
VALUES 
(DEFAULT, 'JavaScript', 1997, 'Brendan Eich', 'VS'),
(DEFAULT, 'C#', 2002, 'Anders Hjelsberg', 'VS'),
(DEFAULT, 'Java', 1996, 'James Gosling', 'IJ');

INSERT INTO language
VALUES
(DEFAULT, 'Python', 1994, 'Guido van Rossum'),
(DEFAULT, 'COBOL', 1959, 'CODASYL');


-- Oppg. 2c,

CREATE TABLE tool2 (
	ID CHAR(2),
	Name TEXT,
	Developer TEXT,
	PRIMARY KEY (ID)
);

CREATE TABLE language2 (
	ID SERIAL,
	Name TEXT,
	Year INTEGER,
	Creator TEXT,
	PRIMARY KEY (ID)
);

CREATE TABLE lang_tool (
	LangID INTEGER,
	ToolID CHAR(2),
	PRIMARY KEY (langid, toolid),
	FOREIGN KEY (langid) REFERENCES language2(ID),
	FOREIGN KEY (toolID) REFERENCES tool2(ID)
);

INSERT INTO tool2
VALUES
('VS', 'Visual Studio Code', 'Microsoft'),
('IJ', 'IntelliJ', 'JetBrains');

INSERT INTO language2
VALUES 
(DEFAULT, 'JavaScript', 1997, 'Brendan Eich'),
(DEFAULT, 'C#', 2002, 'Anders Hjelsberg'),
(DEFAULT, 'Java', 1996, 'James Gosling'),
(DEFAULT, 'Python', 1994, 'Guido van Rossum'),
(DEFAULT, 'COBOL', 1959, 'CODASYL');

INSERT INTO lang_tool
VALUES 
(1, 'VS'),
(2, 'VS'),
(3, 'IJ'),
(4, 'IJ'),
(1, 'IJ'),
(4, 'VS');

	


