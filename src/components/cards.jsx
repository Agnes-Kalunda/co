import React from 'react';
import teamone from '../assets/teamone.jpg'
import teamtwo from '../assets/teamtwo.webp'
import team from '../assets/team.jpeg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={teamone} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Buy bla blah</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Guaranteed Security</p>
                  <p className='py-2 border-b mx-8'>Guaranteed Blah blah</p>
                  <p className='py-2 border-b mx-8'>Get upto 10 beds</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Consult</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={teamtwo} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Buy ready houses</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Guaranteed Security</p>
                  <p className='py-2 border-b mx-8'>Granted Blah blah</p>
                  <p className='py-2 border-b mx-8'>Get upto 10 beds</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Consult</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={team} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Buy Plots</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Guranteed Security</p>
                  <p className='py-2 border-b mx-8'>1 Granted Blah blah</p>
                  <p className='py-2 border-b mx-8'>Get upto 10 beds</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Consult</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;