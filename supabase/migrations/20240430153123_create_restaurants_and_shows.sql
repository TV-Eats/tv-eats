CREATE TABLE shows (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  publisher TEXT NULL
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  website TEXT NULL,
  website_status TEXT NULL,
  phone TEXT NULL,
  description TEXT NULL,
  rating text NULL,
  UNIQUE(name, address)
);

CREATE TABLE restaurant_shows (
  id SERIAL PRIMARY KEY,
  restaurant_id INT NOT NULL REFERENCES restaurants(id),
  show_id INT NOT NULL REFERENCES shows(id),
  UNIQUE(restaurant_id, show_id)
);

ALTER TABLE shows ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_shows ENABLE ROW LEVEL SECURITY;

