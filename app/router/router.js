let express = require("express");
let router = express.Router();
let controller = require("../controller/controller");

const Controller = new controller();

router.get('/', async (_req,res) => {
    const getAllUsers = await Controller.getAllUsers();
    res.status(200).send(`<p style="font-size: 24px">${JSON.stringify(getAllUsers, null, "\n")}</p>`);
});

router.post('/', (req,res) => {
    const userToBeSaved = req.body;
    Controller.saveNewUser(userToBeSaved);
    res.status(200).send(userToBeSaved);
});

module.exports = router;