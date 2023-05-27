import React from "react";

const WhyUs = () => {
  return (
    <div className="px-36 py-10" id='about'>
      <div className="flex justify-between py-10 gap-10">
        <div className="w-1/2">
          <div>
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="py-10 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum laboriosam eveniet porro. Ab fuga temporibus
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 row-s">
            <div className="py-4 pr-4">
              <img src="/assets/Group 32.png" alt="" className="w-16 py-1" />
              <h5 className="font-bold py-1">Fast and Free Shipping</h5>
              <p className="text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                minima.
              </p>
            </div>
            <div className="py-4 pr-4">
              <img src="/assets/Group 31.png" alt="" className="w-16 py-1" />
              <h5 className="font-bold py-1">Easy To Shop</h5>
              <p className="text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                minima.
              </p>
            </div>
            <div className="py-4 pr-4">
              <img src="/assets/Group 33.png" alt="" className="w-16 py-1" />
              <h5 className="font-bold py-1">24/7 Support</h5>
              <p className="text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                minima.
              </p>
            </div>
            <div className="py-4 pr-4">
              <img src="/assets/Group 34.png" alt="" className="w-16 py-1" />
              <h5 className="font-bold py-1">Hassle Free Returns</h5>
              <p className="text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                minima.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img src="/assets/why.png" alt="" className="relative z-10 right-0" />
          <img
            src="/assets/Dot.png"
            className="absolute w-64 -top-10 -left-12"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between py-10 mt-10 gap-16">
        <div className="w-1/2 relative">
          <img
            src="/assets/Group 35.png"
            alt=""
            className="relative z-10 right-0 h-full"
          />
          <img
            src="/assets/Dot(1).png"
            className="absolute w-64 -top-16 -left-24"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-4xl font-bold">
              We Help You Make Modern Interior Design.
            </h2>
            <p className="py-5 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ad,
              unde aliquam nobis quisquam iure nam delectus sit dicta soluta
              necessitatibus, dignissimos distinctio atque omnis, tempore
              quibusdam. Odio, quasi at!
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 row-s">
            <div className="py-1 pr-4">
              <li className="text-gray-600 py-1">
                Lorem ipsum dolor sit consectetur adipisicing elit. Quam,
                minima.
              </li>
            </div>
            <div className="py-1 pr-4">
              <li className="text-gray-600 py-1">
                Lorem dolor sit amet consectetur adipisicing elit. Quam,
                minima.
              </li>
            </div>
            <div className="py-1 pr-4">
              <li className="text-gray-600 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing Quam,
                minima.
              </li>
            </div>
            <div className="py-1 pr-4">
              <li className="text-gray-600 py-1">
                Lorem ipsum sit amet consectetur adipisicing elit. Quam,
                minima.
              </li>
            </div>
          </div>
          <button className="bg-black text-white rounded-full font-semibold px-7 py-2 text-lg my-3 hover:bg-gray-900">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
