const express = require('express');
const boduParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const setUpAndStartServer = () => {
    const app = express();
    app.use(boduParser.json());
    app.use(boduParser.urlencoded({extended: true}));
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });

}


setUpAndStartServer();
