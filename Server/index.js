const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const {ExpenseTrackermodel} = require('./schema.js') //importing the model

const app = express()
app.use(bodyParser.json())
app.use(cors())

//connect To db 
async function connectiontodb(){
   try{
      const url= "mongodb+srv://vijay2304a:1234@cluster0.eqaom0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
       await mongoose.connect(url);
       console.log("connected to Database Successfully")
       //middleware
       const port = process.env.PORT || 8000;
       app.listen(port,function(){
       console.log(`Listening on port ${port}`)
      })
    }
       catch(err){
       console.log("couldn't connect to Database",err)
    }
}
connectiontodb()

//Create - POST
app.post('/expensetracker-create',async function(request,response){
      try{
         await ExpenseTrackermodel.create({
         "amount" : request.body.amount,
         "category" : request.body.category,
         "date" : request.body.date
      })
      response.status(200).json({
         "status" : "success",
         "message" : "new entry created"
      })
   }
   catch(err){
      response.status(500).json({
         "status" : "failure",
         "message" : "entry not created",
         "error" : err
      })
   }
})

//Read - GET
app.get('/expensetracker-get',async function(request,response){
   try{
      const Expensedata = await ExpenseTrackermodel.find()
      response.status(201).json(Expensedata)
   }
   catch(error){
      response.status(500).json({   //500 - internal code error
         "status" : "failure",
         "message" : "entry not added",
         // "error" : error
      })
   }
})

// //Update - PATCH:
// app.patch('/expensetracker-update/:id',async function(request,response){
//    try{
//       const expenseentry = await ExpenseTrackermodel.findByIdAndUpdate(request.params.id,request.body)  
//          response.status(200).send({
//             "status" : "success",
//             "message" : "Update successfully"
//          })
//     }catch(error){
//       response.status(500).json({
//          "status" : "failure",
//          "message" : "Update Not Successfull",
//          "error" : error  
//       })
//    }
// })

app.patch('/expensetracker-update/:id',async function(request,response){
   try{
      const expenseentry = await ExpenseTrackermodel.findById(request.params.id)
      if(expenseentry){
         await expenseentry.updateOne({
            "amount" : request.body.amount,
            "category" : request.body.category,
            "date" : request.body.date
         })
         response.status(200).send({
                        "status" : "success",
                        "message" : "Update successfully"
                     })
                }
               }
                catch(error){
                  response.status(500).json({
                     "status" : "failure",
                     "message" : "Update Not Successfull",
                     "error" : error  
                  })
               }
      })

 //Delete - DELETE
app.delete('/expensetracker-delete/:_id',async function(request,response){
   try{
      const id = request.params._id;
         const deleted = await ExpenseTrackermodel.findByIdAndDelete(id);
         console.log(deleted);
         response.status(200).json({
            status:"success",
            "message":"Deleted Successfully"
         })
      
   }
   catch(err){
      response.status(500).json({
      "status" : "failure",
      "message" : "Delete Not Successfull",
      "error" : err  
   })
  }
})

