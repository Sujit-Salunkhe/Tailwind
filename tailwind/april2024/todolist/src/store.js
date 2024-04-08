import { configureStore} from "@reduxjs/toolkit";
import todoSliceReducer from './tododata.js'
const store = configureStore({
    todo:  todoSliceReducer
})


export default store