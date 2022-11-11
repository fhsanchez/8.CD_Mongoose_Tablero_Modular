const Otter = require('../models/otter');

module.exports = {
  index: function (req, res) {
    Otter.find().then((otter) => {
      res.render("index", { otters: otter });
    });
  },

  form_nutria: function (req, res) {
    res.render("form_nutria", {});    
  },

  create: function (req, res) {
    const otter = new Otter();    
    otter.name = req.body.name;
    otter.age = req.body.age;
    otter.weight = req.body.weight;
    otter.location = req.body.location;
    otter
      .save()
      .then((newOtterData) => console.log("otter created:", newOtterData))
      .catch((err) => console.log(err));
  
    res.redirect("/nutria");

  },

  edit: function (req, res) {
    console.log("Entro a editar");
    const otter = new Otter();
  
    Otter.findOne({ _id: req.params.id })
      .then((otter) => {
        console.log("encontrado : " + otter);
        res.render("form_nutria", { otter: otter });
        //res.redirect("/form_nutria");
      })
      .catch((err) => res.json(err));
  },

  delete: function (req, res) {
  
    console.log("Entro a delete");
    let id = req.params.id;
    
    Otter.deleteOne({ _id: id })
      .then((deletedOtter) => {       
        console.log("eliminado: " + deletedOtter);
        res.redirect("/nutria");
      })
      .catch((err) => res.json(err));

  }

};
