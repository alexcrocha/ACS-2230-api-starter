const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const CatSchema = new Schema({
  name: { type: String, select: true },
  breed: { type: String, select: false },
  colour: { type: String, required: false },
  gender: { type: String, select: false },
  feral: { type: Boolean, select: false },
})

const Cat = mongoose.model('Cat', CatSchema)

module.exports = Cat
