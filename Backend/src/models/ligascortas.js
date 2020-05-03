const mongoose = require('mongoose')
const validator = require('validator')

const ligasSchema = new mongoose.Schema({
	nombreLiga:{
		type: String
	}, 
	codigoLiga:{
		type: String
	}, 
	ligaCorta {
		type: String
		required: true
	},
	ligaOriginal{
		type: String
		required: true
	},
	fechaCreacion:{
   		 type:Date
  },
  fechaModificacion:{
    	type:Date 
  }
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}) 


const Ligas = mongoose.model('Ligas', ligasSchema)

module.exports = Ligas
