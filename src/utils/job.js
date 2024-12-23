const cron = require('node-cron');

const emailService = require('../services/email-services');

const sender = require('../config/emailConfig');
/**
 * 10:00am
 * envry 5 min
 * we will check for the pending mails which was expected to be send by now and is pending
 * 
 */

const setupJobs = () => {
    cron.schedule('*/5 * * * *',async()=>{
        console.log('running a task every 5 minute');
        //fetch all the pending mails
        //send them
        const response = await emailService.fetchPendingMails();
        response.forEach(email => {
           sender.sendMail({
                to:email.recipientEmail,
                subject:email.subject,
                text:email.content
            },async(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:'SUCCESS'});
                }
            }
        })
    })
}
module.exports = setupJobs;


