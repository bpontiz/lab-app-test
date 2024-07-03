let express = require("express");
let router = express.Router();
let controller = require("../controller/controller");

const Controller = new controller();

router.get('/', (req,res) => {
    const getAllUsers = Controller.getAllUsers();
    res.status(200).send(getAllUsers);
});

module.exports = router;