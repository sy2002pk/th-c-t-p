const { default: mongoose } = require("mongoose");

const dbConnect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error('COULD NOT CONNECT TO DATABASE:', error.message);
  }
};
module.exports = dbConnect;
