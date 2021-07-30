import mongoose from 'mongoose'

const pessoaSchema = new mongoose.Schema({
  name: String,
  telefone: String,
})

const model = mongoose.model('pessoas', pessoaSchema)
//module.exports = mongoose.model('pessoas', pessoaSchema)
export { model }