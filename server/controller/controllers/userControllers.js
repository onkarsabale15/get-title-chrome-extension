const services = require("../../service/index")
const addUser = async(req, res) => {
    try {
        const body = req.body;
        const validateAndAddUser = await services.userServices.validateAndAddUser(body);
        console.log(validateAndAddUser)
        res.json({type:validateAndAddUser.type, message:validateAndAddUser.message, data:validateAndAddUser.data}).status(validateAndAddUser.status)
    } catch (error) {
        console.log(error)
        res.json({type:"error", message:"Internal Server Error"}).status(500)
    }
}

module.exports = {
    addUser
}