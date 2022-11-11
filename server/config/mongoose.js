const mongoose = require("mongoose");
// Conectarse a la BD con Mongoose
mongoose.connect("mongodb://localhost/nutriasDB", { useNewUrlParser: true });

module.exports = mongoose;