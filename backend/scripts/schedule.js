
import cron from 'node-cron';
import childProcess from 'child_process'

export const schedule = (cron_time, lineage) => {

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

}