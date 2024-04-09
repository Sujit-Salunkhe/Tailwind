import "./App.css";
import { useForm } from "react-hook-form";
import Todo from "./data.js";
import {
  Container,
  MapContainer,
  InputContainer,
} from "./styledComponents/styledContainer.js";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [todo, setTodo] = useState(Todo);
  
  const addGrocery = (data) => {
    const newTodo = {
      id: new Date().getTime(),
      Todo: data.todo,
    };
    setTodo([...todo, newTodo]);
    reset();
  };
  const clearGrocery = () => {
    setTodo([]);
  };

  const removeTodo = (id) => {
    const newTodo = todo.filter((task) => task.id !== id);
    setTodo(newTodo);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(addGrocery)}>
        <InputContainer>
          <input
            {...register("todo", {
              required: true,
            })}
            type="text"
            placeholder="Add Your Grocery"
            autoComplete="off"
          />
          <button type="submit">add ToDo</button>
          <button onClick={clearGrocery}>remove ToDo</button>
        </InputContainer>
      </form>
      {errors.todo && <div>Please Enter Todo</div>}
      {todo.map((task) => (
        <MapContainer key={task.id}>
          {task.Todo}
          <button onClick={() => removeTodo(task.id)}>Delete</button>
        </MapContainer>
      ))}
    </Container>
  );
}

export default App;
