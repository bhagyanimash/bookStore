import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="p-3 mt-4 mb-4">
        <div className="duration-200 shadow-xl card w-92 bg-base-100 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="text-white bg-green-500 badge">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="justify-between card-actions">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
