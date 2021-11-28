const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountRoutes = require('./routes/account');


const app = express();
setupApp();
setupRoutes();
start();

function setupApp() {
    app.use(cors({ credentials: true, origin: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}

function setupRoutes() {
    app.use('/api/accounts', accountRoutes);
}

function start() {
    const port = 3000;
    app.listen(port, () => {
        console.log('Server is running on port ', port)
    })
}

