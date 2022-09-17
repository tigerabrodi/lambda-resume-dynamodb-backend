// Load the AWS SDK for Node.js
import AWS from "aws-sdk";
const dynamo = new AWS.DynamoDB.DocumentClient();

export const handler = async () => {
  return await dynamo
    .get({
      TableName: "visitors",
      Key: {
        visitorId: 1,
      },
    })
    .promise();
};
