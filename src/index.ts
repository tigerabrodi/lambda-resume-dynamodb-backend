export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from aws-chat-randy AWS Lambda Function!"),
  };
  return response;
};
