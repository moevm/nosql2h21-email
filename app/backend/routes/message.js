const express = require('express');
const router = express.Router();
const dbService = require('../db/messageService');

router.get('/', (req, res) => {
    dbService.getAllMessages()
        .then(result => {
            res.send(result);
        });
})

router.post('/add', (req, res) => {
    dbService.addMessage(req.body)
        .then(result => {
            res.send(result);
        })
})

module.exports = router;
