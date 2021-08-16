const express=require('express');
const app=express();
const mongoose=require('mongoose')
const FoodModel =require('../models/Food');
const port=3004;



/*app.use(express.json())
mongoose.connect('mongodb+srv://user_0602:PKDWjF3ZZepaw4m@cluster0.jax5s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
useNewUrlParser:true,
})
.then((error)=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log('DB ERROR')
})*/
mongoose.connect('mongodb://localhost/myFirstDatabase', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() =>{ 
        console.log('MongoDB Connected...')})
    .catch((err) =>{ console.log(err)
    })


app.get('/post',(req,res)=>{
    const food=new FoodModel({foodName:"Apple",days:2})
    food.save()
     .then((result)=>{
    res.send(result)
    console.log('Food sent')
    
    }) 
     .catch((err)=>{
         console.log(err)
     })
})
app.get('/view',(req,res)=>{
    FoodModel.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.get('/update',(req,res)=>{
    FoodModel.findOneAndUpdate({foodName:'Apple'},{foodName:'Mango'})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.get('/delete',(req,res)=>{
 
    FoodModel.findOneAndDelete({foodName:'Apple'})
     .then((result)=>{
         res.send(result)
    }) 
     .catch((err)=>{
         console.log(err)
     })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
