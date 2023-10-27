import moment from "moment";
import awsSDK from "aws-sdk";

const S3 = new awsSDK.S3({
    signatureVersion: "v4",
    accessKeyId: process.env.ACCESSKEY!,
    secretAccessKey: process.env.SECRETKEY!,
    region: process.env.REGION,
    apiVersion: "2006-03-01",
  });
  

export const getUploadFileUrl = async (fileName: string) => {
  // const fileNamePrefix = uuid();
  // const extension = extractExtention(fileName);
  return await S3.getSignedUrlPromise("putObject", {
    Bucket: process.env.BUCKETNAME,
    Key: `${getLocaiton()}/${fileName}`,
    // ACL: "public-read",
    Expires: 6000 * 5,
  });
};
function getLocaiton(): string {
  const yearMonthFolder = moment().format("YYYY/MM");
  return `uploads/${yearMonthFolder}`;
}
