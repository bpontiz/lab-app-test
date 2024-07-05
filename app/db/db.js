const User = require('./models/index');

async function getUsers() {
    try {
        const getAll = await User.findAll(
            {
                raw: true,
                nest: true,
            }
        );
        console.log("Users:", getAll);
        return getAll;
    }
    catch (err) {
        const errorMessage = "Error after trying to get users from db.\n";
        console.log(`${errorMessage}`,err);
        return errorMessage;
    }
};

async function saveUser(userToBeSaved) {
    try {
        return await User.create(userToBeSaved);
    }
    catch (err) {
        const errorMessage = "Error after trying to save new user in db.\n";
        console.log(`${errorMessage}`,err);
        return errorMessage;
    }
};

module.exports = {getUsers, saveUser}