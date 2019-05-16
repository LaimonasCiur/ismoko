const express = require('express');
const request = require('request');
const router = express.Router();
const mongoose = require('mongoose');

const Tvarkarastis = require('../models/Tvarkarastis');

router.get('/', (req, res, next) => {
  Tvarkarastis.find()
    .exec()
    .then(results => {
      res.status(200).json({
        count: results.length,
        results: results
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        err: error
      });
    });
});

router.post('/', (req, res, next) => {
  const tvarkarastis = new Tvarkarastis({
    _id: new mongoose.Types.ObjectId(),
    diena: req.body.diena,
    laikas: req.body.laikas,
    adresas: req.body.adresas,
    miestas: req.body.miestas,
    dalykas: req.body.dalykas
  });
  tvarkarastis
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Created new Tvarkarastis',
        createdTvarkarastis: result
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
