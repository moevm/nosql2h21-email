const express = require('express');
const router = express.Router();
const dbService = require('../db/messageService');

router.get('/', (req, res) => {
    dbService.getAllMessages()
        .then(result => {
            res.send(result);
        });
})


module.exports = router;