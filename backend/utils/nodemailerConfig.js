module.exports = {
  service: "gmail",
  auth: {
    user: "process.env.SENDER_EMAIL",
    pass: "process.env.PASSWORD",
  },
};
