import todoSchema from "../Model/todo";
import mongoose from "mongoose";
const Mutation = {
  async createTodo(_, { data }) {
    if (!data.title || !data.description) {
      throw new Error("Title  or description is required ");
    }
    return await todoSchema.create({
      title: data.title,
      description: data.description,
      completed: false,
    });
  },
  updateTodo: async (_, { id, title, description, completed }) => {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await todoSchema.findOneAndUpdate(
        { _id: objectId }, 
        { $set: { title, description, completed } },
        { new: true } 
      );
      
    return result;
  },
  deleteTodo: async (_, { id }) => {
    const objectId = new mongoose.Types.ObjectId(id)   
     const result = await todoSchema.findByIdAndDelete(objectId);
    return !!result;
  },
};

export default Mutation;
