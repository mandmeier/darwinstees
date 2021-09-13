
import dotenv from 'dotenv'
import S3 from 'aws-sdk/clients/s3.js'

dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey

})


export const uploadFile = async (file, fileName) => {

    const uploadParams = {
        Bucket: bucketName,
        Body: file,
        Key: fileName
    }

    const params = {
        Bucket: bucketName,
        Key: fileName 
    }
    try {
        await s3.headObject(params).promise()
        console.log(`Design ${fileName} Found in Amazon S3`)
    } catch (err) {
        console.log(`Saved file ${fileName} to Amazon S3`)
        return s3.upload(uploadParams).promise()
        
    }

}


// downloads a file from s3