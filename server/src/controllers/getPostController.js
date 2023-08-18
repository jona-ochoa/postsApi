const axios = require("axios");

const getPostController = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = { getPostController };
