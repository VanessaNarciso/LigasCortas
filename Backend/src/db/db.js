const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://vanessanarciso:N159753456h.@cluster0-ed9b9.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
  useUnifiedTopology: true
})







