let express = require("express");
let router = express.Router();
let controller = require("../controller/controller");

const Controller = new controller();

router.get('/', async (_req,res) => {
    const getAllUsers = await Controller.getAllUsers();
    res.status(200).send(`<h4>${getAllUsers}</h4>`);
});

router.post('/', (req,res) => {
    const userToBeSaved = req.body;
    const controlledUser = Controller.saveNewUser(userToBeSaved);
    res.status(200).send(controlledUser);
});

module.exports = router;