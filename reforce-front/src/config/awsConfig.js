import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY_ID,
  region: 'ap-northeast-2'
});

export function uploadToS3(file) {
  const params = {
    Bucket: 'reforcektds',
    Key: `upload/${file.name}`,
    Body: file,
    ACL: 'public-read'
  };

  return s3.upload(params).promise();
}
