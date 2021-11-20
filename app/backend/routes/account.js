const express = require('express');
const router = express.Router();
const dbService = require('../db/accountService');

router.get('/', (req, res) => {
    dbService.getAllAccounts()
        .then(result => {
            res.send(result);
        });
})

module.exports = router;