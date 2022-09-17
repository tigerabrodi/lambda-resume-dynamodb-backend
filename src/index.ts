// Load the AWS SDK for Node.js
import AWS from "aws-sdk";
const documentClient = new AWS.DynamoDB.DocumentClient({
  region: "eu-west-3",
});

export const handler = async () => {
  return await documentClient
    .get({
      TableName: "visitors",
      Key: {
        visitorId: "1",
      },
    })
    .promise();
};
