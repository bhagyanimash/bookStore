import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex items-center justify-center h-screen shadow-md border-[2px]">
    <div id="my_modal_3" className="w-[600px]">
<div className="modal-box">

  <form method="dialog">
    {/* if there is a button, it will close the modal */}
    <button className="absolute btn-sm btn-circle btn-ghost right-2 top-2">Close</button>
  </form>
  <h3 className="text-lg font-bold">Signup</h3>
 
  <div className="mt-4 space-y-2">
    <span>Name</span>
    <input type="text" 
    placeholder="Enter your full name" 
    className="px-3 border rounded outline-none w-80-md"/>
  </div>
   {/* Email*/}
   <div className="mt-4 space-y-2">
    <span>Email</span>
    <input type="email" 
    placeholder="Enter your email" 
    className="px-3 py-1 border rounded outline-none w-80-md"/>
  </div>
  {/*password*/}
  <div className="mt-4 space-y-2">
    <span>Password</span>
    <input 
    type="email" 
    placeholder="Enter your password" 
    className="px-3 border rounded outline-none w-80-md"/>
  </div>
  {/*button*/}
  <div className="flex justify-around mt-4">
    <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">Signup</button>
    <p className='text-xl'>Have account?{""} 
    <button
  
    className='text-blue-500 underline cursor-pointer'
    onClick={()=>
      document.getElementById("my_modal_3").showModal()
    }
    >Login
    </button>{""}
    <Login/>
    </p>
  </div>
</div>
</div> 
</div>

  )
}

export default Signup