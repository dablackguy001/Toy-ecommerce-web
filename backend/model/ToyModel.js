import mongoose from "mongoose";

const ToySchema = new mongoose.Schema({
    name:{type:String,required:true},
    price: {type:Number,required:true},
  description: {type:String,required:true},
  category: {type:String,required:true},
  sizes:{type:[String],required:true},
  colour:{type:[String],required:true},
  Toy_image: {type:String,required:true},
  Toy_image2:{type:String,required:true},
  Toy_image3: {type:String,required:true},
  Toy_image4:{type:String,required:true},

})

const ToyModel= mongoose.models.Toy ||  mongoose.model("Toy",ToySchema)

export default ToyModel;