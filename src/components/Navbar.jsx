import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Company</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to='/container'>Container</Link></li>
        <li className='p-4'><Link to='/company'>Company</Link></li>
        {/* <li className='p-4'>Resources</li> */}
        <li className='p-4'><Link to='/form'>Form</Link>Form</li>
        {/* <li className='p-4'>Contact</li> */}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'><Link to='/container'>Container</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to='/company'>Company</Link></li>
          {/* <li className='p-4 border-b border-gray-600'>Resources</li> */}
          <li className='p-4 border-b border-gray-600'><Link to='/form'>Footer</Link></li>
          {/* <li className='p-4'>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;