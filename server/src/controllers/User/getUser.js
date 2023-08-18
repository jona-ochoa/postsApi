const axios = require("axios");

const getAllUser = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = { getAllUser };
