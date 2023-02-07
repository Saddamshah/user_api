const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: false},
    email: { type: String, required: true},
    dob: { type: Date, required: true}
}, 
{ minimize: false, timestamps: true });



const User = mongoose.model("users", userSchema);

module.exports = {
    User
}

