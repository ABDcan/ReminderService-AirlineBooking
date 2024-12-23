const TicketService = require('../services/email-services');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Not able to register an email reminder',
            err: error
        })
    }
}   

module.exports = {
    create
}