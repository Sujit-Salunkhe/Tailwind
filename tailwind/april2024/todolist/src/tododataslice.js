import {createSlice} from '@redux-toolkit'
const initialStage = {
    todolist: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
}
const todoSlice = createSlice({
    name:'todoData',
    initialStage,
    reducers:{
        addTodo:(data,reset) => {
        const newTodo = {
            id: new Date().getTime(),
            Todo: data.todo,
              };
            setTodo([...todo, newTodo]);
            state.
            reset();
        },
        removeTodo:() => {

        },
        removeAllTodo:() => {

        }

    }
})

export  const {addTodo,removeTodo,removeAllTodo} = todoSlice.actions
export default todoSlice.reducer