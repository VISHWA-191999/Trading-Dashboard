import React from "react";

const RecentPost = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-2">
      <h2 className="text-white mb-2 text-center">In recent posts</h2>
      <hr className="mb-2" />
      <div className="bg-[#171717] rounded-xl p-4">
        <div className="flex space-x-3">
          {/* <img src="/api/placeholder/48/48" alt="Carbon Cell" className="w-12 h-12 rounded-full" /> */}
          <div>
            <h3 className="text-white font-bold flex items-center">
              Carbon Cell
              <span className="ml-1 text-gray-400 text-sm">@carboncell</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Carbon Cell: Pioneering Financial Solutions for a Greener Future!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              necessitatibus laborum reprehenderit est enim sit vero possimus
              doloribus rerum cum qui, saepe provident ipsam, suscipit quasi
              dicta commodi iure blanditiis!
            </p>
          </div>
        </div>
       
      </div>
      <hr className="mt-1" />
        <button className=" block px-2 mx-auto bg-[#22C55E] py-1 rounded-lg text-white mt-2">
          Follow us on X
        </button>
    </div>
  );
};

export default RecentPost;
