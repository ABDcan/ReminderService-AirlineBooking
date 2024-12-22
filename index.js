const express = require('express');
const boduParser = require('body-parser');
const { PORT } = require('./src/config/serverConfig');
const { sendBasicEmail } = require('./src/services/email-services');
const setUpAndStartServer = () => {
    const app = express();
    app.use(boduParser.json());
    app.use(boduParser.urlencoded({extended: true}));
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    console.log('Hello world');
    sendBasicEmail(
        'a23346339@gmail.com',
        'abhishekshaw343@gmail.com',
        'This is a testing email',
        'This is a testing email body'
    );

}


setUpAndStartServer();
