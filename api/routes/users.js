const express = require('express');
const request = require('request');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then(results => {
      res.status(200).json({
        count: results.length,
        results
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
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    class: req.body.class
  });

  const data = {
    members: [
      {
        email_address: req.body.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: req.body.name
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/4720730699',
    method: 'POST',
    headers: {
      Authorization: 'auth b3bb198549c143ccd965163b6ccb10c0-us20'
    },
    body: postData
  };
  user
    .save()
    .then(result => {
      request(options, (err, response, body) => {
        if (err) {
          console.log(err);
        } else {
          if (response.statusCode === 200) {
            console.log('OK');
          } else {
            console.log(err);
          }
        }
      });
      console.log(result);
      res.status(201).json({
        message: 'Created new user succesfully',
        createdUser: user
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
