const express = require('express');
const boduParser = require('body-parser');
const { PORT } = require('./src/config/serverConfig');
const { sendBasicEmail } = require('./src/services/email-services');
const jobs = require('./src/utils/job');
const TicketController = require('./src/controllers/ticket-controller');
const setUpAndStartServer = () => {
    const app = express();
    app.use(boduParser.json());
    app.use(boduParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    jobs();
    // console.log('Hello world');
    // sendBasicEmail(
    //     'a23346339@gmail.com',
    //     'abhishekshaw343@gmail.com',
    //     'This is a testing email',
    //     'This is a testing email body'
    // );

}


setUpAndStartServer();
