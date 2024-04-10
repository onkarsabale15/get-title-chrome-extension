const validators = require("../../validator/index")
const models = require("../../model/index")
const validateAndAddUser = async(body)=>{
    try {
        const isValidBody = await validators.userValidator.validate(body);
        if(isValidBody.error){
            return{
                type:"error",
                message:isValidBody.error.details[0].message,
                status:400
            }
        }
        else{
            if(isValidBody.warning){
                return{
                    type:"warning",
                    message:isValidBody.warning.details[0].message,
                    status:400
                }
            }else{
                const user = await models.User.create(body);
                return{
                    type:"success",
                    message:"User Added Successfully",
                    status:200,
                    data:user
                }
            }
        }
    } catch (error) {
        console.log(error)
        return{
            type:"error",
            message:"Internal Server Error",
            status:500
        }
    }
}
module.exports={
    validateAndAddUser
}