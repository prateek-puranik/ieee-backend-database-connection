const mongoose=require('mongoose')
const FoodSchema = new mongoose.Schema({
    foodName:{
        type: String,
        required:true,
    },
    days:{

        type:Number,
        required:true,
        min:1,
    },
});
const Food=mongoose.model("hello",FoodSchema)
module.exports=Food