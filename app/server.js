let express =  require("express");
let path =  require("path");
let bodyParser =  require("body-parser");
let fs =  require("fs");
let sequelize =  require("sequelize");
const router = require("./router/router");

const port = 8081;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));  

app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./index.html"));
});

app.use('/users', router);

app.get('/*', (req, res) => {
  const clientEndpoint = req.params;
  res.status(404).send(`<h2>404. <h3 style="color: red; display: inline">/${clientEndpoint[0]}</h3> Resource not found.</h2>`);
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}/`));