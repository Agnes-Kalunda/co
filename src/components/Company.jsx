import React from 'https://cdn.skypack.dev/react';
import Navbar from './Navbar';
import Footer from './Footer';
import teamone from '../assets/teamone.jpg'
import Newsletter from './Newsletter';
import ppl from '../assets/ppl.png'

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


    <section className="relative bg-lapt8  bg-[length:1450px_450px] bg-no-repeat">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-300 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">
            <h2 className="h2 mb-4">How Company works</h2>
            <p className="text-xl text-[#00df9a]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>


      <div>
         {/* Items */}
         <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none backdrop-blur-sm ">

{/* 1st item */}
<div className="relative flex flex-col items-center p-6 bg-white hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl  transition duration-500 hover:scale-100">
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
<div className="relative flex flex-col items-center p-6 bg-white hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl  transition duration-500 hover:scale-100">
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
<div className="relative flex flex-col items-center p-6 transition duration-500 hover:scale-100 bg-white rounded hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl">
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
<div className="relative flex flex-col items-center p-6 transition duration-500 hover:scale-100 bg-white rounded hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl">
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
<div className="relative flex flex-col items-center p-6 transition duration-500 hover:scale-100 bg-white rounded hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl">
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
<div className="relative flex flex-col items-center p-6 transition duration-500 hover:scale-100 bg-white rounded hover:shadow-indigo-600 hover:shadow-mdrounded shadow-2xl">
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
        
      </div>

      

    </section>

    <div className='mt-32 flex flex-wrap items-center text-white  bg-[#F5F5F5] hei bg-w bg-[length:1450px_800px]' >
        <div className='mx-auto mt-8 w-full px-4 md:w-5/12'>
            <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg'>
              <img className='' src={ppl} alt="ppl"></img>
            </div>
            <h2 className='text-gray mb-3 font-bold text-4xl text-black'>Working with us is a pleasure</h2>
            <p className='mb-8 font-normal text-black'>Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br />Don't let your uses guess by attaching tooltips and popoves to lorem bleh<br /> Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br/> Don't let your uses guess by attaching tooltips and popoves to lorem lorem <br/>Don't let your uses guess by attaching tooltips and popoves to lorem lorem<br/>Don't let your uses guess by attaching tooltips and popoves to bleh lorem<br/>Don't let your uses guess by attaching tooltips and popoves to lorem bleh <br/>Don't let your uses guess by attaching tooltips and popoves to lorem bleh bm<br/>Don't let your uses guess by attaching tooltips and popoves to  </p>
        </div>

        <div className='mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0 shadow-lg'>
            <div className='shadow-lg shadow-gray-500/10'>
                <div className='relative h-56'>
                <img className='h-full w-full' src={teamone} alt="/" />

                </div>

                <div className='mb-3 font-bold text-4xl'>
                    <h2 className='text-black'>Top Notch Services</h2>
                </div>
                <div className=' text-black'>
                    <p >The Arctic Ocean freezes every winter and much of the lorem lorem<br/> sea-ice then thaws every summer, and that process will<br/>sea-ice then thaws every summer, and that process will<br/>sea-ice then thaws every summer, and that process will</p>

                </div>

            </div>

        </div> 

        
    </div>   

    <div class="max-w-screen-xl px-4 mx-auto md:px-8 pt-20 pb-48">
  <div class="mb-10 md:mb-16">
    <h2
      class="
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      "
    >
      Our Team Section
    </h2>

    <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
      perspiciatis omnis aspernatur impedit vel, consectetur laudantium nulla et
      aliqua
    </p>
  </div>

  <div class="grid gap-4 md:grid-cols-3">
    <div class="p-4 shadow">
      <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
          alt="Image"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="font-bold text-indigo-500 md:text-lg">John Doe</div>
        <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Founder / CEO
        </p>

        <div class="flex">
          <div class="flex gap-4">
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 shadow">
      <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt="Image"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="font-bold text-indigo-500 md:text-lg">John Doe</div>
        <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Web Developer
        </p>

        <div class="flex">
          <div class="flex gap-4">
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 shadow">
      <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg"
          alt="Image"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="font-bold text-indigo-500 md:text-lg">Scarlet</div>
        <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          Devops Engineer
        </p>

        <div class="flex">
          <div class="flex gap-4">
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                class="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    <Newsletter />
    <Footer />
    </div>
    
  );
}

export default Company;
