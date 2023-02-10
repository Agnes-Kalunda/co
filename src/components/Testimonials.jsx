import React from 'react';
import teamone from '../assets/teamone.jpg'
import  quotation from '../assets/quotation.png'
 
function Testimonials(){
    return(

        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10 p-6'>
            <div className='relative bg-purple-600 text-white p-8 rounded-lg lg:col-span-2'>
                {/* <img className='absolute top-0 right-6' src={quotation} alt='/'></img> */}
                <div className='relative z-10 flex justify-start space-x-4'>
                <img className='h-8 w-8 rounded-full border-purple-400' src={teamone} alt='/' />
            <div>
              <h2 className='font-bold text-sm'>Agnes Mbiti</h2>
              <h3 className='text-x5'>Software Developer</h3>
            </div>
                </div>
                <p className='relative z-10 mt-4 font-bold text-xl leading-tight'>
                    I received a job offer mid-course, and the subjects i <br /> learned were current if not more so, in the country i <br /> joined. I hinestly feel i got every pennys worth.
                </p>

                <p className='mt-4 text-sm opacity-70'></p>
            </div>
            
            
            <div className='relative bg-gray-600 text-white p-8 rounded-lg'>
                {/* <img className='absolute top-0 right-6' src={quotation} alt='/'></img> */}
                <div className='relative z-10 flex justify-start space-x-4'>
                <img className='h-8 w-8 rounded-full border-purple-400' src={teamone} alt='/' />
            <div>
              <h2 className='font-bold text-sm'>Neema Mbiti</h2>
              <h3 className='text-x5'>Software Engineer</h3>
            </div>
                </div>
                <p className='relative z-10 mt-4 font-bold text-xl leading-tight'>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Phasellus a erat vulputate,<br/> vehicula nulla nec, efficitur sem. Etiam in <br/>purus quam. Vestibulum eu convallis justo. <br/>Nulla porta, orci at malesuada varius, purus <br/>nibh dignissim sem, vel faucibus mauris lectus <br/>eu erat. In justo lacus, fringilla vel turpis ut,<br/> consequat luctus justo. Vivamus finibus ipsum<br/> non venenatis venenatis.  
                </p>

                <p className='mt-4 text-sm opacity-70'></p>
            </div>



            <div className='relative bg-white-600 text-gray-800 p-8 rounded-lg lg:row-start-2'>
                {/* <img className='absolute top-0 right-6' src={quotation} alt='/'></img> */}
                <div className='relative z-10 flex justify-start space-x-4'>
                <img className='h-8 w-8 rounded-full border-purple-400' src={teamone} alt='/' />
            <div>
              <h2 className='font-bold text-sm'>Neema Mbiti</h2>
              <h3 className='text-x5'>Software Engineer</h3>
            </div>
                </div>
                <p className='relative z-10 mt-4 font-bold text-xl leading-tight'>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Phasellus a erat vulputate,<br/> vehicula nulla nec, efficitur sem. Etiam in <br/>purus quam. Vestibulum eu convallis justo. <br/>Nulla porta, orci at malesuada varius, purus <br/>nibh dignissim sem, vel faucibus mauris lectus <br/>eu erat. In justo lacus, fringilla vel turpis ut,<br/> consequat luctus justo. Vivamus finibus ipsum<br/> non venenatis venenatis. 
                </p>

                <p className='mt-4 text-sm opacity-70'></p>
            </div>





            <div className='relative bg-gray-900 text-white p-8 rounded-lg lg:cols-span-2'>
                {/* <img className='absolute top-0 right-6' src={quotation} alt='/'></img> */}
                <div className='relative z-10 flex justify-start space-x-4'>
                <img className='h-8 w-8 rounded-full border-purple-400' src={teamone} alt='/' />
            <div>
              <h2 className='font-bold text-sm'>Neema Mbiti</h2>
              <h3 className='text-x5'>Software Engineer</h3>
            </div>
                </div>
                <p className='relative z-10 mt-4 font-bold text-xl leading-tight'>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Phasellus a erat vulputate,<br/> vehicula nulla nec, efficitur sem. Etiam in <br/>purus quam. Vestibulum eu convallis justo. <br/>Nulla porta, orci at malesuada varius, purus <br/>nibh dignissim sem, vel faucibus mauris lectus <br/>eu erat. In justo lacus, fringilla vel turpis ut,<br/> consequat luctus justo. Vivamus finibus ipsum<br/> non venenatis venenatis. 
                </p>

                <p className='mt-4 text-sm opacity-70'></p>
            </div>





            <div className='relative bg-white text-gray p-8 rounded-lg lg:row-span-2 lg:row-start-1 lg:col-start-4'>
                {/* <img className='absolute top-0 right-6' src={quotation} alt='/'></img> */}
                <div className='relative z-10 flex justify-start space-x-4'>
                <img className='h-8 w-8 rounded-full ' src={teamone} alt='/' />
            <div>
              <h2 className='font-bold text-sm'>Neema Mbiti</h2>
              <h3 className='text-x5'>Software Engineer</h3>
            </div>
                </div>
                <p className='relative z-10 mt-4 font-bold text-xl leading-tight'>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Phasellus a erat vulputate,<br/> vehicula nulla nec, efficitur sem. Etiam in <br/>purus quam. Vestibulum eu convallis justo. <br/>Nulla porta, orci at malesuada varius, purus <br/>nibh dignissim sem, vel faucibus mauris lectus <br/>eu erat. In justo lacus, fringilla vel turpis ut,<br/> consequat luctus justo. Vivamus finibus ipsum<br/> non venenatis venenatis. </p>

                <p className='mt-4 text-sm opacity-70'></p>
            </div>

        </div>


        </div>
        
    )

}

export default Testimonials;