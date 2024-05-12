import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";



function Login() {
  const{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  const onSubmit=(data) => console.log(data);
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)}="dialog">
        {/* if there is a button, it will close the modal */}
        <Link to="/" className="absolute btn-sm btn-circle btn-ghost right-2 top-2">Close
        </Link>
      </form>
      <h3 className="text-lg font-bold">Login</h3>
      
      <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" 
        placeholder="Enter your email" 
        className="px-3 py-1 border rounded outline-none w-80-md"
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && (
        <span className="text-sm text-red-500">
          This field is required
          </span>
        )}
        
        </div>
      {/*password*/}
      <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input 
        type="password" 
        placeholder="Enter your password" 
        className="px-3 py-1 border rounded outline-none w-80-md"
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password &&( 
        <span className="text-sm text-red-500">
          This field is required
          </span>
        )}
       
      </div>
      {/*button*/}
      <div className="flex justify-around mt-4">
        <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">Login</button>
        <p>Not registered? <span className="text-blue-500 underline cursor-pointer">Signup</span></p>
      </div>
    </div>
  </div> 
</dialog>
    </div>
  )
}

export default Login