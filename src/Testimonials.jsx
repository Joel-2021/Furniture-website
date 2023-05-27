import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// // or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const Testimonials = () => {
  return (
    <>
      <div className="px-36 flex gap-10 mt-16">
        <div className="flex items-center w-1/3">
          <img src="/assets/Group 36.png" alt="" className="w-28 h-36" />
          <div className="flex flex-col gap-1 pl-4">
            <h3 className="font-bold text-sm">Nordic Chair</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              quidem.
            </p>
            <button className="text-gray-600 text-sm font-bold w-fit">
              Read More
            </button>
          </div>
        </div>
        <div className="flex items-center w-1/3">
          <img src="/assets/Group 37.png" alt="" className="w-28 h-36" />
          <div className="flex flex-col gap-1 pl-4">
            <h3 className="font-bold text-sm">Kurzo Aero</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              quidem.
            </p>
            <button className="text-gray-600 text-sm font-bold w-fit">
              Read More
            </button>
          </div>
        </div>
        <div className="flex items-center w-1/3">
          <img src="/assets/Group 38.png" alt="" className="w-28 h-36" />
          <div className="flex flex-col gap-1 pl-4">
            <h3 className="font-bold text-sm">Ergonomic Chair</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              quidem.
            </p>
            <button className="text-gray-600 text-sm font-bold w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="px-36 py-16 pt-24">
        <h1 className="text-4xl text-center font-bold">Testimonials</h1>
        <Splide>
          <SplideSlide className="flex flex-col items-center p-10">
            <p className="text-grey-600 w-2/3">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              saepe blanditiis nesciunt minima officia vitae magnam ducimus
              minus provident in aliquid consequatur, atque eaque veniam
              architecto, facilis repudiandae. Quam animi incidunt, excepturi
              harum tempore esse magnam corporis similique labore repudiandae
              impedit, error quos, accusamus dolorem aperiam libero consectetur.
              Excepturi, reiciendis."
            </p>
            <div className="flex flex-col items-center py-10">
              <img src="/assets/Mask group.png" alt="" className="w-16 h-16" />
              <h4 className="font-bold py-2">Michelle Anna</h4>
              <p className="text-black">CEO, Co-founder XYZ Inc.</p>
            </div>
          </SplideSlide>
          <SplideSlide className="flex flex-col items-center p-10">
            <p className="text-grey-600 w-2/3">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              saepe blanditiis nesciunt minima officia vitae magnam ducimus
              minus provident in aliquid consequatur, atque eaque veniam
              architecto, facilis repudiandae. Quam animi incidunt, excepturi
              harum tempore esse magnam corporis similique labore repudiandae
              impedit, error quos, accusamus dolorem aperiam libero consectetur.
              Excepturi, reiciendis."
            </p>
            <div className="flex flex-col items-center py-10">
              <img src="/assets/Mask group.png" alt="" className="w-16 h-16" />
              <h4 className="font-bold py-2">Daenerys Targaryen</h4>
              <p className="text-black">
                Mother of Dragons
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Testimonials;
