-- Oppg. 1c, 1)

SELECT year, name, creator
FROM language
ORDER BY year ASC;


-- Oppg. 1c, 2)

-- Solution alternative 1, targeting the ID.
SELECT *
FROM tool
WHERE ID = 'VS';

-- Solution alternative 2, targeting the name. 
SELECT *
FROM tool
WHERE name ='Visual Studio Code';


-- Oppg. 2a, 3)

SELECT toolid, COUNT(name) AS "NumberOfLanguages"
FROM language
GROUP BY toolid
HAVING toolid IS NOT NULL;


-- Oppg. 2a, 4)

SELECT language.name AS "LanguageName", tool.name AS "ToolName"
FROM language
LEFT JOIN tool ON tool.id = language.toolid;


-- Oppg. 2d, (3))

SELECT toolid, COUNT(langid) AS "NumberOfLanguages"
FROM lang_tool
GROUP BY toolid;


-- Oppg. 2d, (4))

SELECT language.name AS "LanguageName", tool.name AS "ToolName"
FROM lang_tool
JOIN tool ON tool.id = lang_tool.toolid
RIGHT JOIN language ON language.id = lang_tool.langid;


 

