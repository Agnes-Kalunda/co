import React from 'https://cdn.skypack.dev/react';
import Navbar from './Navbar';
import Footer from './Footer';
import teamone from '../assets/teamone.jpg'
import Newsletter from './Newsletter';

function Company() {
  return (

    
    <div>
<Navbar />
        
        {/* <div className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-gradient-to-r from-purple-500 to-pink-500'>
<h1 className='text-white px-64 font-bold'>Your Story Starts With Us.</h1>
        </div>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500'>
            <h3 className='text-white  text-center '>lorem lorem lorem lorem lorem lorem <br /> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.</h3>
        </div> */}


    <section className="relative bg-gradient-to-r from-purple-500 to-pink-500">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">
            <h2 className="h2 mb-4">How Company works</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>




          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Initial Contact</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Discovery Session</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contracting</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fast Prototyping</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Develop & Launch</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           
           
          
          </div>

         

        </div>
        
      </div>

      

    </section>

    <div className='mt-32 flex flex-wrap items-center text-white'>
        <div className='mx-auto mt-8 w-full px-4 md:w-5/12'>
            <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg'>
              image
            </div>
            <h2 className='text-gray mb-3 font-bold text-4xl'>Working with us is a pleasure</h2>
            <p className='mb-8 font-normal text-blue-gray-500'>Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br />Don't let your uses guess by attaching tooltips and popoves to lorem bleh<br /> Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br/> Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br/>Don't let your uses guess by attaching tooltips and popoves to lorem lorem<br/>Don't let your uses guess by attaching tooltips and popoves to bleh lorem<br/>Don't let your uses guess by attaching tooltips and popoves to lorem bleh <br/>Don't let your uses guess by attaching tooltips and popoves to lorem bleh bm<br/>Don't let your uses guess by attaching tooltips and popoves to  </p>
        </div>

        <div className='mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0 shadow-lg'>
            <div className='shadow-lg shadow-gray-500/10'>
                <div className='relative h-56'>
                <img className='h-full w-full' src={teamone} alt="/" />

                </div>

                <div className='mb-3 font-bold text-4xl'>
                    <h2>Top Notch Services</h2>
                </div>
                <div className='font-normal text-blue-gray-500'>
                    <p >The Arctic Ocean freezes every winter and much of the lorem lorem<br/> sea-ice then thaws every summer, and that process will<br/>sea-ice then thaws every summer, and that process will<br/>sea-ice then thaws every summer, and that process will</p>

                </div>

            </div>

        </div> 

        
    </div>   

    <div className='pt-20 pb-48 px-4'>
        <div className='container mx-auto'>
            <h1 className='text-white text-5xl text-center'> Here are our heroes</h1>
            <p className='text-white pt-10 text-center'>   According to the National Oceanic and Atmospheric <br /> Administration,Ted, Scambos, NSIDClead scentist, puts the <br/>potentially record
            maximum.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-24 gap-12 mt-24'>
            <img className='h-full w-full' src={teamone} alt="/" />
            <img className='h-full w-full' src={teamone} alt="/" />
            <img className='h-full w-full' src={teamone} alt="/" />
            <img className='h-full w-full' src={teamone} alt="/" />
            </div>

        </div>
    </div>

    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl'>
            <h1 className='text-3xl font-ermibold text-center text-indigo-700 underline uppercase decoration-wavy'>Contact us</h1>
            <form className='mt-6'>
                <div className='mb-2'>
                    <label>
                        <span className='text-gray-700'>Your Name</span>
                        <input
                        type="text"
                        name='name'
                        className='w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='John Doe'/>

                    </label>

                </div>

                <div className='mb-2'>
                    <label>
                    <span className='text-gray-700'>Email address</span>
                <input 
                name='name'
                type='email'
                className='block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='John.doe@example.com' required/>
                    </label>

                </div>

                <div className='mb-2'>
                    <label>
                        <span className='text-gray-700'>Message</span>
                        <textarea
                        name='message'
                        className='block  w-full mt-2 px-16 py-8 border-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' 
                        rows='5'></textarea>

                    </label>

                </div>

                <div className='mb-6'>
                    <button
                    type='submit'
                    className='h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800'>
                        Contact Us
                    </button>

                </div>
                <div></div>



            </form>

        </div>
        

    </div>
    <Newsletter />
    <Footer />
    </div>
    
  );
}

export default Company;
