import React, { useState } from "react";

const Products = () => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  const handleProductHover = (index) => {
    setHoveredProductIndex(index);
  };

  const handleProductMouseLeave = () => {
    setHoveredProductIndex(null);
  };

  const products = [
    {
      imageUrl: "/assets/product-1.png",
      name: "Nordic Chair",
      price: "$50",
    },
    {
      imageUrl: "/assets/product-2.png",
      name: "Kurzo Areo Chair",
      price: "$78",
    },
    {
      imageUrl: "/assets/product-3.png",
      name: "Ergonomic Chair",
      price: "$43",
    },
  ];

  return (
    <div className="px-36 flex gap-10 h-96 my-32" id='products'>
      <div className="w-1/4 flex flex-col justify-center">
        <h3 className="text-4xl font-bold">Crafted With Excellent Materials</h3>{" "}
        <p className="text-gray-500 py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repudiandae.
        </p>
        <button className="w-2/3 bg-black text-white rounded-full font-semibold px-7 py-2 text-lg my-5 hover:bg-gray-900">
          Explore
        </button>
      </div>
      {products.map((product, index) => (
        <div
          className="w-1/4 flex justify-end flex-col items-center"
          onMouseEnter={() => handleProductHover(index)}
          onMouseLeave={handleProductMouseLeave}
        >
          {console.log(hoveredProductIndex)}
          <div
            className={`h-2/3 w-full relative flex flex-col justify-end items-center rounded-lg ${
              hoveredProductIndex === index ? "bg-brand-blue" : ""
            }`}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="absolute bottom-24"
            />
            <div className="flex flex-col items-center pb-10 relative">
              <h3 className="font-bold">{product.name}</h3>
              <p>{product.price}</p>
              {hoveredProductIndex === index && (
                <img
                  src="/assets/Group 44.png"
                  alt=""
                  className="absolute -bottom-12  w-20 h-20"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
