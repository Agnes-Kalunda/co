import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px ] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>HERO hERO HERO HERO</p>
                <h1 className='md:text-7xl sn:text-6xl text-4xl font-bold md:py-6'> Grow grow grow.</h1>
                <div className='flex justify-center items-center '>
                    <p className='md:text-5xl sn:text-4xl text-xl font-bold'> fast, fast, fast fast</p>
                    <Typed 
                    className ="md:text-sxl sm:text-4l text-xl font-bold pl-2"
                    strings ={['david', 'mike', 'neema']}
                    typeSpeed={120}
                    backSpeed= {140}
                    logo
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-grey-500'>hhhhhhh hhhhhhh hhhhhh nnnnnn mmmmm</p>

            </div>

        </div>
    )
}

export default Hero;