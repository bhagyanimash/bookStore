import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json"
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
    <div className="container px-4 max-w-screen-2xl mx auto md:px-20">
      <div className="items-center justify-center text-center mt-28"></div>
        <div>
            <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you 
            <span className="text-pink-500">Here!:</span> 
            </h1>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis massa elit, 
            a aliquam nibh lobortis nec. Etiam vitae erat ut nisi ultrices interdum. Sed ac 
            ipsum nisl. Nullam consectetur condimentum ante, non egestas nunc tempor sed. Donec 
            id porta massa, in tempor metus. Etiam mauris ex, eleifend lobortis eros eget, viverra 
            euismod sapien. Aenean ac velit mi. Praesent tincidunt ligula ligula, sit amet convallis 
            tellus posuere at. Praesent scelerisque nisi sit amet lorem lobortis blandit. In varius feugiat 
            eleifend. Morbi ullamcorper metus sed arcu laoreet pretium. Donec porta felis nisl, nec convallis 
            odio vulputate a. Suspendisse pretium, dui nec pulvinar suscipit, tellus mi dictum erat, porttitor euismod mauris justo id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel est at ligula convallis pretium. Fusce non pellentesque mi, id accumsan risus.
            </p>
            <Link to="/">
            <button className="px-4 py-2 text-white duration-300 rounded big-pink-500-md hover:bg-pink-700">
              Back
            </button>
            </Link>
            </div>
            
              
                <div className="grid mt-12-cols-1 md:grid-cols-4">
                {list.map((item)=>(
                  <Cards key={item.id} item={item}/>
                )) }
              
            </div>
    </div>
    </>
  )
}

export default Course