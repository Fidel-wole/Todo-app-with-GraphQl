import connectDb from "../db/connectDb"
import todoSchema from "../Model/todo"
const Query ={
    async Todos(){
        const todos = await todoSchema.find();
        return todos
    },
    getTodoById: async (_, { id }) => {
        const todo = await todoSchema.findById(id);
        if(!todo){
            throw new Error("Not found")
        }
      },
}

export {Query as default}