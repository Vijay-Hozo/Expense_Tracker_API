const mongoose = require('mongoose')

const ExpenseTrackerschema = new mongoose.Schema //Schema 
(
    {
        amount:{
            type : Number
        },
        category : {
            type : String
        },
        date:{
            type: String
        }
    }
)

const ExpenseTrackermodel = mongoose.model('expense-details' , ExpenseTrackerschema) //first letter caps for model

module.exports = {ExpenseTrackermodel}  //exporting the model