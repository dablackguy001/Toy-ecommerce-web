import mongoose from "mongoose";


 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Tobest240:Tobest240@cluster0.nmhk3bp.mongodb.net/debrak-web').then(()=> console.log('DBconnected'))
}