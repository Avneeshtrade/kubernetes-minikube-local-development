const User = require("../db/models/user");

const getUsers = async () =>{
    const users = await User.findAll();
    return users;
}
const saveUser = async (user) => {
    if(user.username && user.email){
        let savedUser = await User.build(user);
        let tempUser = savedUser.save();
        return tempUser;
    }
    return null;
}
module.exports = {getUsers, saveUser}