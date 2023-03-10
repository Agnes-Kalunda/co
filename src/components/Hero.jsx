import React from 'react';
import Typed from 'react-typed';
import Navbar from './Navbar';


const Hero = () => {
  return (

    <div>
      <Navbar />
      <div className='text-white bg-lapt8  bg-[length:1450px_800px] bg-no-repeat'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH MBITIS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Grow grow grow with
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['DAVID', 'MIKE', 'NEEMA']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Bleh rrrrrr fffff sssssss aaaa DAVID, MIKE, & NEEMA platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>


    </div>
    
  );
};

export default Hero;