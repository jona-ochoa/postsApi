const { getAllUser } = require('../controllers/User/getUser')

const getUserHandler = async (req, res) => {
    const { name } = req.query;
    if(!name){
        const allUsers = await getAllUser()
        console.log(allUsers)
        res.status(200).json(allUsers);
    }
}

module.exports = { getUserHandler };
 