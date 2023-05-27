import React from "react";

const Hero = () => {
  return (
    <div className="bg-brand-green px-36">
      <nav className="flex justify-between items-center py-10">
        <img src="/assets/Furni..png" alt="" className="h-8" />
        {/* <h1 className="text-white font-semibold text-3xl">Furni</h1> */}
        <div className="flex">
          <ul className="flex justify-between items-center px-10">
            <li className="p-3">
              <a href="" className="text-white border-b-4 border-brand-yellow">
                Home
              </a>
            </li>
            <li className="p-3">
              <a
                href=""
                className="text-white "
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#about").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                {" "}
                About Us
              </a>
            </li>
            <li className="p-3">
              <a
                href=""
                className="text-white"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#products").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Services
              </a>
            </li>
            <li className="p-3">
              <a
                href=""
                className="text-white"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#footer").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Contact Us
              </a>
            </li>
            <li
              className="p-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#blogs").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              <a href="" className="text-white">
                Blog
              </a>
            </li>
          </ul>
          <div className="btns flex gap-5">
            <button>
              <img src="/assets/User.png" className="w-5 h-5 object-fit" />
            </button>
            <button>
              <img src="/assets/Cart.png" className="w-5 h-5 object-fit" />
            </button>
          </div>
        </div>
      </nav>
      <div className="flex justify-between py-8">
        <div className="left w-1/2 py-16">
          <h1 className="text-6xl font-semibold text-white py-6">
            Modern Interior Design Studio
          </h1>
          <div className="flex gap-4 py-24">
            <button className="bg-brand-yellow text-brand-green rounded-full px-4 py-2 text-xl font-semibold">
              Shop Now
            </button>
            <button className="text-white border border-white rounded-full px-4 py-2 text-xl font-semibold hover:bg-white hover:text-brand-green">
              Explore
            </button>
          </div>
        </div>
        <div className="right w-2/3">
          <div className="hero-img relative">
            <img
              src="/assets/Dotted.png"
              className="absolute w-64 -right-10 top-16"
              alt=""
            />
            <img
              src="/assets/couch 1.png"
              className=" z-20 scale-110 top-8 absolute"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
