const express = require("express");
const mongoose =  require('mongoose');
const cors  = require('cors');


require('./db/config');
const Users = require('./db/model/Users');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4500 || process.env.PORT;

app.get('/' , async(req , resp)=>{
    try{
        resp.send('done');
    }catch(error){
        console.log(error);
    }
})

app.post('/user/register' , async (req , resp)=>{
    try{
        const data = new Users(req.body);
        let result = await data.save();
        resp.send(result);
        console.log(result);
    }catch(error){
        console.log('user register api error : ' + error);
    }
})

app.put('/user/update/:email' , async (req , resp)=>{
    try{
        let result = await Users.updateOne(
            {email : req.params.email} , 
             {$set : req.body}
            )
          resp.send(result);
    }catch(error){
        console.log('update data api error : ' + error);
    }
})


app.get('/user/find/:email/:password' , async(req , resp)=>{
    try{
         let result = await Users.find({email : req.params.email , password : req.params.password })
         resp.send(result);
    }catch(error){
        console.log('find user api error : ' + error);
    }
})

app.delete('/user/data/delete/:_id' , async(req , resp)=>{
    try{
         let  result = await Users.deleteOne()
    }catch(error){
        console.log('deleter data api error : '+ error);
    }
})


app.listen(PORT);
