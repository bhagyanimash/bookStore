import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    <div className="flex items-center justify-center h-screen shadow-md border-[2px]">
      <div id="my_modal_3" className="w-[600px]">
        <div className="modal-box">

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button, it will close the modal */}
            <button type="button" className="absolute btn-sm btn-circle btn-ghost right-2 top-2">Close</button>
          
            <h3 className="text-lg font-bold">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-3 border rounded outline-none w-80-md"
                {...register("name", { required: true })}
              />
              <br/>
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
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

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br/>
              <input
                type="password"
                placeholder="Enter your password"
                className="px-3 border rounded outline-none w-80-md"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">Signup</button>
              <p className='text-xl'>Have account?{" "}
                <Link to="/login" className='text-blue-500 underline cursor-pointer'>Login</Link>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Signup;
