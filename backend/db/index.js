const { Op } = require('sequelize');
const sequelize = require('./config');
const User = require('./models/user');
// Connect to the database

const connect = async () => {
    try{
        console.debug(sequelize.config)
        await sequelize.authenticate();
        console.debug('Connected to the database');
        await sequelize.sync({force:false});
        let isUserExist = await User.findOne({
            where: {
                [Op.or]: {
                    username: 'John',
                    email: 'john@example.com'
                }
            }});
            if(!isUserExist){
                await User.create({
                    email: 'john@example.com',
                    username: "John"
                })
            }
        }
        catch(ex){
            console.debug(ex);
        }
}
connect();
