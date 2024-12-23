const sender = require('../config/emailConfig');

const TicketRepository = require('../repository/ticket-repository');

const ticketRepostory = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
       const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
        // return response
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepostory.getAll({status: 'PENDING'});
        return response;
    } catch (error) {
        console.log(error);
    }
}
const createNotification = async (data) => {
    try {
        console.log(data);
        const response = await ticketRepostory.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (status) => {
    try {
        const ticket = await ticketRepostory.updateTicket(status);
     return ticket
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}