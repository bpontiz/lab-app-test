const { getUsers, saveUser } = require("../db/db");


class controller {
    constructor(){};

    async getAllUsers() {
        const dbGetUsers = await getUsers();
        return dbGetUsers;
    };

    async saveNewUser(userToBeSaved) {
        const dbSaveUser = await saveUser(userToBeSaved);
        return dbSaveUser;
    };
};

module.exports = controller