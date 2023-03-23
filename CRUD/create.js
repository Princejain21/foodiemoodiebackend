const userModel=require('../schema/Schema')
const usercreated=async(val)=>{
    try {
    const document1=new userModel(val);
    console.log(document1)
    const response= await document1.save();
        return response;
    } catch (error) {
        return error
    }
}
module.exports=usercreated;


