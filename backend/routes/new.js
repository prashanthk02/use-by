const express = require('express');
const router = express.Router();

//helper functions
const addItem = function(productName, openedOn, useBy, user_id, db) {
  const queryString = `INSERT INTO list(user_id, productName, openedOn, useBy)
    VALUES ($1, $2, $3, $4) RETURNING *`;

    return db.query(queryString, [user_id, productName, openedOn, useBy])
      .then((result) => {
        return result.rows[0];
      });
};

module.exports = (db) => {
  router.get('/', (req, res) => {
    return db
      .query("SELECT * FROM list")
      .then((result) => {
        return res.json(result.rows);
      })
  });

  router.post('/', (req, res) => {
    const item = req.body;

    addItem(list.user_id, list.productName, list.openedOn, list.useBy, db)
    .then(result => {
      return res.json({ message: "Added" });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
  })

  return router;
}
