#WR6 FULL STACK REVIEW

## MVP
- users can add bird pictures to database,
- users can create an account,
- users can login to website,
- users can view bird pictures from our database
- users can edit their own post

## Icebox
- users can comment on peoples post,
- people can edit their own posts,
- geolocation api
- can create friendslist
- can view individual profiles( including your own )

### Database
-Schemas:

users
```SQL
CREATE TABLE bird_users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(60) NOT NULL,
  username VARCHAR (20) NOT NULL,
  password TEXT NOT NULL,
);
```

posts
```SQL
  CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    img TEXT,
    species_name VARCHAR(32),
    location TEXT,
    user_id INT REFERENCES bird_users(user_id)
  )
```

comments
```SQL
  CREATE TABLE comments(
  comment_id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INT REFERENCES bird_users(user_id),
  post_id INT REFERENCES posts(post_id)
  );
```

example:
```SQL
  SELECT * FROM posts
  JOIN comments
  ON posts.post_id = comments.post_id
  WHERE post.post_id = 4
```


### Server

-Dependencies:
  - express
  -massive
  -dotenv
  -express-session
  -bcrypt

-File Structure:
  -server
    -index.js
    -contollers/
      -authController.js
      -postController.js
-Endpoints
  -Auth endpoints:
    - register => '/auth/register'
    -login => '/auth/login'
    -logout => '/auth/logout'
    -getUserSession => '/api/get_user'
  -Post endpoints:
    -read posts => '/api/posts'
    -delete => '/api/post/:id'
    -edit => 'api/post/:id'
    -create => 'api/post'

### Frontend

-Dependencies:
  -axios
  -react-router-dom
  -redux
  -react-redux
  -redux-promise-middleware

-File Structure
  -src/
    -App.js
    -App.css
    -Reset.css
    -routes.js
      - '/' => Auth.js
      - '/createpost' => Form.js
      - '/feed' => Feed.js
    -Redux
      -Store.js
      -Reducer.js
    -Components/
      -Header.js
      -Auth.js
      -Form.js
      -Feed.js
      -Post.js

  <a href="https://www.figma.com/file/aDLlahYZlVXd8ug0Dxe4Zn/WR6-Fullstack-Review?node-id=0%3A1">My Figma Wire Frame </a>
  




