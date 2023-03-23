const userModel = require("../schema/Schema");
const userRead = async (email) => {
  try {
   const response= await userModel.find({ email });
   return response;
  } catch (error) {
    return error;
  }
};

module.exports = userRead;
