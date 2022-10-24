CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) NOT NULL UNIQUE,
    hashedpw VARCHAR NOT NULL
);

INSERT INTO users(username, hassedpw) values($1,$2);
