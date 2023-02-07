const {User} = require("../Models/User")
const {validationResult } = require("express-validator")

const addUser = async(req, res) => {
    try {
        const errors = await validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: true, msg: { errors: errors.array() }});
        }

        const { name, email, dob } = req.body;
        
        let user = new User({ name, email, dob })
        await user.save()

        return res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: true, msg: error.message})
        console.log("error.message: ", error.message)
    }
}

const getUser = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id)
        if(!user){
            res.status(200).json({error: false, msg: "Can not found the user by given id."})
        }
        return res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: true, msg: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id)
        if(!user){
            res.status(200).json({error: false, msg: "Can not found the user by given id."})
        }
        const deleteUser = await User.findOneAndDelete({_id: id}, {new: true})
        if(deleteUser){
            return res.status(200).json({msg: `User deleted successfully`})
        }

    } catch (error) {
        res.status(500).json({error: true, msg: error.message})
    }
}

module.exports = {
    addUser, 
    getUser, 
    deleteUser
}