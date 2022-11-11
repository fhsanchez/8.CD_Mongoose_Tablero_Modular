const mongoose = require("mongoose");

// Creacion del esquema
const OtterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  location: String,
});
// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Otter = mongoose.model("Otter", OtterSchema);

module.exports = Otter;