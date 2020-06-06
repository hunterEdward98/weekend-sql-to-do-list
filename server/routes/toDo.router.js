const pool = require('../modules/pool');
const express = require('express');
const toDoRouter = express.Router();
toDoRouter.get('/', (req, res) => {
     const queryText = 'SELECT * FROM list_items';
     pool
          .query(queryText)
          .then((result) => {
               res.send(result.rows);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
toDoRouter.post('/:title/:desc/:doByDate/:doByTime/:dateAdded', (req, res) => {
     const title = req.params.title;
     const desc = req.params.desc;
     const doByDate = req.params.doByDate;
     const doByTime = req.params.doByTime;
     const dateAdded = req.params.dateAdded;
     const queryText = 'INSERT INTO list_items (title,description, done_by_date, done_by_time, added) values ($1,$2,$3,$4,$5)';
     pool
          .query(queryText, [title, desc, doByDate, doByTime, dateAdded])
          .then((result) => {
               res.send(201);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          });

});
toDoRouter.put('/:id/:newVal/:colName', (req, res) => {
     const id = req.params.id;
     const newVal = req.params.newVal;
     const colName = req.params.colName;
     let queryText = '';
     if (colName === 'title') {
          queryText = `
          UPDATE list_items
          SET title = $1
          WHERE id = $2;`;
     } if (colName === 'description') {
          queryText = `
          UPDATE list_items
          SET description = $1
          WHERE id = $2;`;
     } if (colName === 'done_by_date') {
          queryText = `
          UPDATE list_items
          SET done_by_date = $1
          WHERE id = $2;`;
     } if (colName === 'done_by_time') {
          queryText = `
          UPDATE list_items
          SET done_by_time = $1
          WHERE id = $2;`;
     } if (colName === 'completed') {
          queryText = `
          UPDATE list_items
          SET conpleted = $1
          WHERE id = $2;`;
     }
     pool
          .query(queryText, [id, newVal])
          .then((result) => {
               res.send(203);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
toDoRouter.delete('/', (req, res) => {
     const queryText = 'SELECT * FROM list_items';
     pool
          .query(queryText)
          .then((result) => {
               res.send(result.rows);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
toDoRouter.get('/', (req, res) => {
     const queryText = 'SELECT * FROM list_items';
     pool
          .query(queryText)
          .then((result) => {
               res.send(result.rows);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
toDoRouter.get('/', (req, res) => {
     const queryText = 'SELECT * FROM list_items';
     pool
          .query(queryText)
          .then((result) => {
               res.send(result.rows);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
toDoRouter.get('/', (req, res) => {
     const queryText = 'SELECT * FROM list_items';
     pool
          .query(queryText)
          .then((result) => {
               res.send(result.rows);
          })
          .catch((error) => {
               console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
          })

});
module.exports = toDoRouter;

