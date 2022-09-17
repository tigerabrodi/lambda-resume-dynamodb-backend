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

  // Not handling errors, tryna get this shit to work as simple as possible in order to finish the cloud resume challenge so I can move onto building a real fullstack app.
  await documentClient
    .put({
      Item: {
        visitorId: "1",
        count: newCount,
      },
      TableName: "visitors",
    })
    .promise();

  // We're probably supposed to query it again, I'm just returning `newCount` for the simplicity of it.
  return newCount;
};
