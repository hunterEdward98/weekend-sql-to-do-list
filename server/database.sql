
CREATE TABLE list_items
(
     id serial primary key,
     title varchar(50) NOT NULL,
     description varchar(200),
     done_by_date DATE NOT NULL,
     done_by_time TIME,
     added DATE NOT NULL
)