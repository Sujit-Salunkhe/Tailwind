// import { useState } from "react";
import { useForm } from "react-hook-form";

const Reacthook = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  border-black"
    >
      <input
        {...register("name", { required: 'Name is Required'})}
        type="text"
        placeholder="Name"
        className="p-3 border-black border-2 m-2"
      />
      {errors.name && (
        <div className="text-red-800">{errors.name.message}</div>
      )
        
        
      }
      <input
        {...register("gmail", {
          required: 'Email is Required',
          pattern: /^[a-zA-Z0-9._%+-]+@(?:gmail|email)\.\w+$/,
        })}
        type="gmail"
        placeholder="gmail"
        className="p-3 border-2 border-black m-2"
      />
      {errors.gmail && (
        <div className="text-red-800">{errors.gmail.message}</div>
      )}
      <input
        {...register("password", {
          required: 'Password is Requried',
          validate:(value) => {
                if(value.length < 8){
                    return 'Password should be more than 7 characters'
                }
            }
        })}
        type="password"
        placeholder="Password"
        className="p-3 border-2 border-black m-2"
      />
       {errors.password && (
        <div className="text-red-800">{errors.password.message}</div>
      )}
      <button type="submit" className="p-3 border-2 border-black w-20 m-2">
        Submit
      </button>
    </form>
  );
};

export default Reacthook;
