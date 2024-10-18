import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center hero bg-gray-800 text-white">
        <div className="text-center max-w-[800px] px-4 py-8 h-full flex flex-col items-center justify-center">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-5xl md:text-9xl font-bold mb-12">
            AeroScan
          </h1>
          <br></br>
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Micro-Doppler Based Target Classification
          </h2>
          <p className="max-w-[700px] mt-4 mb-2 mx-auto leading-relaxed md:leading-7 text-justify">
          Our Micro-Doppler Based Target Classification system is designed to enhance the capabilities of security and surveillance systems, offering precise and reliable identification of aerial targets. Explore the potential of our solution and how it can be integrated into your security infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap">
            <Link to="/Overview">
              <button className="text-white px-5 py-3 rounded-full bg-orange-600 hover:bg-[#FFFFFF] hover:text-orange-600">
                Get Started
              </button>
            </Link>
            {/* <Link to="/Dashboard">
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Dashboard
              </button>
            </Link>
            <Link to="/Features">
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Features
              </button>
            </Link>
            <Link to="/Contributors">
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Contributors
              </button>
            </Link>
            <Link to="/Contact">
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Contact Us
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;