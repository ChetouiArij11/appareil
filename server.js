const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const routeAppareil = require("./backend/routes/appareil.route");
const app = express();
app.use(express.json());

app.use(cors());
app.use("appareilsAPI",routeAppareil)
// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
"mongodb+srv://arij:00000000@cluster0.8swkl0o.mongodb.net/appareilsss?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });

// GET

  app.use("/appareilsAPI", routeAppareil);

  // chargement d'un site web static
  app.use(express.static(path.join(__dirname, "backend/www")));

  const Appareil = mongoose.model('Appareil', { name: String, status: String });
  const app1 = new Appareil({ name: 'TV', status: 'éteint' });
  app1.save().then(() => console.log('Insertion effectué avec success !!!'));
  app.listen(3000, () => {
    console.log("server is running on port 3000...");
  });
