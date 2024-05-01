import {Schema} from "mongoose";
import mongoose from "mongoose";
const todoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
});
export default mongoose.model('Todo', todoSchema);