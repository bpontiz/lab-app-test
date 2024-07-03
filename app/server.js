let express =  require("express");
let path =  require("path");
let bodyParser =  require("body-parser");
let fs =  require("fs");
let sequelize =  require("sequelize");
const router = require("./router/router");

const port = 8080;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));  

app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(304).sendFile(path.join(__dirname, "index.html"));
});

app.use('/data', router);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));