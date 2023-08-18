const { getPostController } = require('../controllers/getPostController')

const getPostHandler = async (req, res) => {
    const { title, body } = req.query;
    if(!title && !body){
        const allPosts = await getPostController()
        res.status(200).json(allPosts);
    }
}

module.exports = { getPostHandler };
