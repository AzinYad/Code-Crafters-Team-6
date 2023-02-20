CREATE DATABASE energiser_final_project;


CREATE TABLE energiser (
    energiser_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (energiser_id)
);



INSERT INTO energiser (energiser_id, name, description)
VALUES (1, 'Energiser 1', 'This is the description for Energiser 1');
INSERT INTO energiser (energiser_id, name, description)
VALUES (2, 'Energiser 1', 'This is the description for Energiser 2');
INSERT INTO energiser (energiser_id, name, description)
VALUES (3, 'Energiser 1', 'This is the description for Energiser 3');
INSERT INTO energiser (energiser_id, name, description)
VALUES (4, 'Energiser 1', 'This is the description for Energiser 4');
INSERT INTO energiser (energiser_id, name, description)
VALUES (5, 'Energiser 1', 'This is the description for Energiser 5');







CREATE TABLE energiser_rating (
    rating_id INT NOT NULL,
    energiser_id INT NOT NULL,
    rating INT NOT NULL,
    PRIMARY KEY (rating_id),
    FOREIGN KEY (energiser_id) REFERENCES energiser(energiser_id)
);


INSERT INTO energiser_rating (rating_id, energiser_id, rating)
VALUES (1, 1, 5);





