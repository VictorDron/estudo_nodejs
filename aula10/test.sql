
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