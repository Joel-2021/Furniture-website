import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="px-36 bg-brand-gray pb-36" id='blogs'>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl py-10 font-bold">Recent Blogs</h1>
          <a href="" className="underline font-semibold text-sm">
            View All Posts
          </a>
        </div>
        <div className="flex justify-evenly gap-6">
          <div>
            <img src="assets/Mask group(1).png" className="w-96 h-64 " />
            <div className="py-8">
              <p className="font-bold text-md">First Time Home Owner ideas</p>
              <p className="text-sm italic">
                by <span className="font-bold not-italic">nana</span> on{" "}
                <span className="font-bold not-italic">Nov 18th,2022</span>
              </p>
            </div>
          </div>
          <div>
            <img src="assets/Mask group(2).png" className="w-96 h-64 " />
            <div className="py-8">
              <p className="font-bold text-md">First Time Home Owner ideas</p>
              <p className="text-sm italic">
                by <span className="font-bold not-italic">nana</span> on{" "}
                <span className="font-bold not-italic">Nov 18th,2022</span>
              </p>
            </div>
          </div>
          <div>
            <img src="/assets/Mask group(3).png" className="w-96 h-64 " />
            <div className="py-8">
              <p className="font-bold text-md">First Time Home Owner ideas</p>
              <p className="text-sm italic">
                by <span className="font-bold not-italic">nana</span> on{" "}
                <span className="font-bold not-italic">Nov 18th,2022</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-36 h-80">
        <div>
          <h3 className="font-semibold py-3">Subscribe to our NewsLetter</h3>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="placeholder-gray-400 h-10 rounded-md border border-black px-2"
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="placeholder-gray-400 h-10 rounded-md border border-black px-2"
            />
            <button className="w-10 h-10">
              <img src="/assets/Group 39.png" alt="" />
            </button>
          </div>
        </div>
        <div className="relative w-1/2">
          <img
            src="/assets/sofa 1.png"
            alt=""
            className="absolute -bottom-56 object-fit"
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
