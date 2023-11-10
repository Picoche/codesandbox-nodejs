//exercice 0:
//console.log("message javascript du serveur");

//exercice 1
// @ts-ignore
//const myApp = require("simple-hello-world-example");

//const msg = myApp.printMsg(); // print and return " Hello World! "

//exercice 2
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bonjour tout le monde");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/tvaForm", function (req, res) {
  res.sendfile("public/tvaForm/index.html");
});

// app.get("/form", function (req, res) {
//   res.json(req.query);
// });

app.post("/form", function (req, res) {
  const prix = parseInt(req.body.prix);
  const tva = parseInt(req.body.TVA);
  const prixTC = prix + (tva / 100) * prix;
  res.send(`Prix HT : ${prix}€, TauxTVA : ${tva}%, Total : ${prixTC}€`);
});

app.use("/formation-LP-DReAM", express.static("public/dream"));
