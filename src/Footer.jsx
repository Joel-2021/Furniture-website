import React from "react";

const Footer = () => {
  return (
    <div className="px-36 text-gray-500 pt-10" id='footer'>
      <img src="./assets/Furni...png" alt="" className="h-10" />
      <div className="flex gap-16 py-6">
        <p className="w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          odio minus nisi, pariatur sunt delectus ab aut, odit ea totam repellat
          sequi maiores necessitatibus? Aspernatur error maiores numquam et non?
        </p>
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Support </a>
          </li>
          <li>
            <a href="">Knowledge Base</a>
          </li>
          <li>
            <a href="">Live Chat</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Jobs </a>
          </li>
          <li>
            <a href="">Our Team</a>
          </li>
          <li>
            <a href="">Leadership</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Nordic Chair  </a>
          </li>
          <li>
            <a href="">Ergonomic</a>
          </li>
          <li>
            <a href="">Kruzo Aero</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 py-10">
        <img src="/assets/Group 40.png" alt="" className="w-10 h-10" />
        <img src="/assets/Group 41.png" alt="" className="w-10 h-10" />
        <img src="/assets/Group 42.png" alt="" className="w-10 h-10" />
        <img src="/assets/Group 43.png" alt="" className="w-10 h-10" />
      </div>
      <div className="flex justify-between py-10">
        <p>Copyright 2022</p>
        <div className="flex gap-8">
          <p>Terms and Condition </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
