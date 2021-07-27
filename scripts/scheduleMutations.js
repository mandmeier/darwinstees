//import dotenv from 'dotenv';
//import mongoose from 'mongoose';
import cron from 'node-cron';
import childProcess from 'child_process'
import Metadata from '../models/Metadata.js'



const dateToCron = (date) => {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const days = date.getDate();
    const months = date.getMonth() + 1;
    return `0 ${minutes} ${hours} ${days} ${months} *`;
};


// // connect to MongoDB

// dotenv.config()
// const MONGODB_URI = process.env.MONGODB_URI;

// const getConnection = async () => {
//     try {
//     await mongoose.connect(MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     })
//     console.log('Connection to DB Successful');
//     } catch (err) {
//     console.log('Connection to DB Failed');
//     }
// };

// getConnection();



export const scheduleMutations = async () => {


    const lineages = ['lineax', 'mandalay', 'ellipticus']

    console.log("Schedule")
    // get next mutation time from Mongo

    try {


        lineages.forEach(async (lineage) => {

            const metadata = await Metadata.findOne({lineage: lineage})
            //console.log(metadata)
    
            // convert to cron time
            const date = new Date(metadata.nextGenTime);
            const cron_time = dateToCron(date);
            console.log(lineage, cron_time)

            cron.schedule(cron_time, async () => {
        
                const date_ob = new Date();
                const year = date_ob.getFullYear();
                const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                const date = ("0" + date_ob.getDate()).slice(-2);
                const hours = date_ob.getHours();
                const minutes = date_ob.getMinutes();
                const seconds = date_ob.getSeconds();
                const time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    
                console.log(`${time} | updating ${lineage}`)
    
                var cp = childProcess.fork(`evos/${lineage}/scripts/nextgen.js`);
                cp.on("exit", function (code, signal) {
                    console.log("Exited", {code: code, signal: signal});
                });
                cp.on("error", console.error.bind(console));
    
            });

        })


    } catch (error) {
        console.log(error)
    }

}








// var date=new Date("2017-05-09T01:30:00.123Z");

// var mins=date.getMinutes();
// //mins variable for the 1st * and so on 
// var secs=date.getSeconds();

// var dayofmonth=date.getDate();

// var month=date.getMonth();

// var dayofweek=date.getDay();


