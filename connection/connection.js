const mongoose=require('mongoose');
require('dotenv').config();
const url='mongodb://localhost:27017/FoodOrder'

const liveDatabaseUrl=process.env.liveDatabaseUrl;
const connection=async()=>{
    try {
        await mongoose.connect(liveDatabaseUrl,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
           }).then((res)=>{
            console.log('connected successfully')
        }).catch((error)=>{
            console.log(error)
        })
    } catch (error) {
        console.log(error)
        
    }
}

module.exports=connection;