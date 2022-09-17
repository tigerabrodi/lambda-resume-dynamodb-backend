// Load the AWS SDK for Node.js
import AWS from "aws-sdk";
const documentClient = new AWS.DynamoDB.DocumentClient({
  region: "eu-west-3",
});

type Item = {
  count: number;
  visitorId: string;
};

// using node-lambda to test this locally.
export const handler = async () => {
  const response = await documentClient
    .get({
      TableName: "visitors",
      Key: {
        visitorId: "1",
      },
    })
    .promise();

  const item = response.Item as Item;
  const newCount = item.count + 1;

  await documentClient
    .put({
      Item: {
        visitorId: "1",
        count: newCount,
      },
      TableName: "visitors",
    })
    .promise();

  return newCount;
};
