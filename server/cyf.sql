DROP TABLE IF EXISTS energizers CASCADE;
DROP TABLE IF EXISTS raitings CASCADE;

CREATE TABLE energizers (
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(50) NOT NULL,
    energizer    VARCHAR NOT NULL
);

CREATE TABLE raitings (
    id              SERIAL PRIMARY KEY,
    energizer_id    integer REFERENCES energizers(id),
    raiting         integer NOT NULL
);

INSERT INTO energizers(name, energizer) VALUES ('hello world',' another jolt that explores one of our favorite themes: You have to unlearn something old in order to learn something new. A nice thing about this brief activity is that you dont need any supplies or equipment.Goal
To experience problems associated with unlearning previous associations. Instructions'
);

INSERT INTO raitings(energizer_id,raiting) VALUES (1,5);