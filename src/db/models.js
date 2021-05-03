const mongoose = require("mongoose")
const validator = require("validator")

const SenderSchema = mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required : true
  },

  Email : {
    type : String,
    trim: true,
    required : true,
    validate(value){
      if ( ! validator.isEmail(value)){
        throw new Error("Invalid Email.")
      }
    }
  },

  Message : {
    type : String,
    required : true
  }
})

const MessagesCollection = mongoose.model('Message', SenderSchema);

module.exports = MessagesCollection;