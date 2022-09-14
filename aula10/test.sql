
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT 
);

CREATE TABLE price (
    abertura FLOAT(10),
    fechamento FLOAT(10),
    maximo FLOAT(10),
    minimo FLOAT(10)
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    'Victor',
    'Vic@teste',
     22
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    'VictordRON',
    'Vic@teste2',
     22
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    'VictordRON1',
    'Vic@teste21',
     22
);


INSERT INTO usuarios(nome,email,idade) VALUES(
    'VictordRON6',
    'Vic@teste28',
     22
);

SELECT * FROM usuarios WHERE nome='Victor';