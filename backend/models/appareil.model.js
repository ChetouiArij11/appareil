const mongoose = require('mongoose')

// definition du schéma
const appareilSchema = mongoose.Schema(
  {
    name: {type: String, required: true},
   status: {type: String, required: true}
  }
)

// creation du model eleve
module.exports = mongoose.model('appareil', appareilSchema)

