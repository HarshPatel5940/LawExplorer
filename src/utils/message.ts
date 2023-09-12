const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export const createMessage = (body: string, to: string) => {
  client.messages.create({
    body: `Your OTP is ${body}`,
    messagingServiceSid: process.env.NEXT_PUBLIC_TWILIO_MESSAGING_SERVICE_SID,
    to,
  });
};
