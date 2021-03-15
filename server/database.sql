CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_of_creation DATE  DEFAULT current_date
);

CREATE TABLE refreshtokens (
  token_id serial PRIMARY KEY,
  user_id INT NOT NULL,
  token TEXT NOT NULL,
  FOREIGN KEY (user_id)
      REFERENCES users (user_id) 
        ON DELETE CASCADE
);