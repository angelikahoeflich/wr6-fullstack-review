CREATE TABLE bird_users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(60) NOT NULL,
  username VARCHAR (20) NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO bird_users
(email, username, password)
VALUES
('roadrunner@az.gov', 'rocky', 'run');


  CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    img TEXT,
    species_name VARCHAR(32),
    location TEXT,
    user_id INT REFERENCES bird_users(user_id)
  );

INSERT INTO posts
(img, species_name, location, user_id)
VALUES
('img', 'road_runner', 'backyard', 1 )
('img', 'blue bird', 'top of house', 1 )

  CREATE TABLE comments(
  comment_id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INT REFERENCES bird_users(user_id),
  post_id INT REFERENCES posts(post_id)
  );