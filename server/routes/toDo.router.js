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
toDoRouter.post('/:title/:text/:doBy', (req, res) => {
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
module.exports(toDoRouter);

