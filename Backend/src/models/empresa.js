const validator = require('validator')
const mongoose = require('mongoose')

const empresaSchema = mongoose.Schema({
  nombre: {
    type: String
    required: true
  },
  razon_social: {
    type: String
    required: true
  },
  domicilio: {
    type: String

  }, 
  numero:{
    type:String
  },
  pais:{
    type:String
  },
  fechaCreacion:{
    type:Date
  },
  fechaModificacion:{
    type:Date 
  }
})

empresaSchema.virtual('user',{
  ref: 'usuario'
  localField: '_id', 
  foreignField: 'partOf'
})



const Empresa = mongoose.model('Empresa', empresaSchema)
module.exports = Empresa