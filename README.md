# SQL To Do List

## Intro

This project is going to be a simple to do list with database support. adjust the `pool.js` file in `server/modules` to fit your username and password for whatever postgres tool you use.
:::image type="content" source="images/Screenshot_2020-06-07 Document(1).png" alt-text="An Image of the working program" width='400px' height='400px':::

## Setting Up/ Creating your database.

You can name your database whatever you'd like to, but you'll need to change the database value in `pool.js` if you don't name it **To Do List**.
when you're finished setting the database up, you need to set the table up. Create a table with the name of **list_items** in your new database, with the following values

```sql
CREATE TABLE list_items (
id serial primary key,
title varchar(50) NOT NULL,
description varchar(200),
done_by_date DATE NOT NULL,
done_by_time TIME,
added DATE NOT NULL)
```

## Running the App :)

to run the app, you'll need to go to this file in a bash terminal, and type the commands

```bash
npm init --yes
npm install express
npm install pg
npm install moment
```

YOU'RE READY TO START! just run

```bash
node server/server.js
```
