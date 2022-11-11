const otters = require("../controllers/otters");

// 1. Ruta pantalla principal
module.exports = function(app){

app.get("/nutria", (req, res) => {
    otters.index(req, res);
  });
  
  // 2. Ruta Formulario de Ingreso y Edición
  app.get("/form_nutria", (req, res) => {
    otters.form_nutria(req, res);
  });
  
  // 3. Ruta Agregar nutria en BD y redirige a listado general
  app.post("/new_nutria", (req, res) => {
      otters.create(req, res);

  });
  
  // 4. Edita los datos de una Nutria
  app.get("/edit/:id", (req, res) => {
    otters.edit(req, res);

  });
  
  // 5. Elimina una Nutria
  app.get("/delete/:id", (req, res) => {
      otters.delete(req, res)

  });

}