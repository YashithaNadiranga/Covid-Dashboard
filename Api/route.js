const express = require('express');
const businessRoutes = express.Router();

let Business = require('./model');

businessRoutes.route('/add').post((req, resp) => {
    let business = new Business(req.body);
    business.save().then(business => {
        resp.status(200).json({'business': 'business is Added Successfully'});
    })
        .catch(err => {
            resp.status(400).send("Unable to sent database ");
        });
});
