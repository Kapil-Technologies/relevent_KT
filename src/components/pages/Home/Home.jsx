import React from 'react'
import Slider from './Slider'
import Testimonial from './Testimonial'
import ScrollingLogo from './ScrollClientLogo'
import BusinessScroll from '../BussinessScroll'

const Home = () => {
  return (
    <div>
      <h1>I am Home Element</h1>
      <Slider />
      <div className='mt-10'>
           <BusinessScroll/>
    </div>
      <Testimonial />
   
        {/* <div className="flex justify-center items-center h-screen  bg-gray-100">
          <ScrollingLogo />
         </div> */}

       <div className="flex justify-center items-center h-56 bg-gray-100">
      <div className="w-full max-w-screen-lg h-32"> 
        <ScrollingLogo />
      </div>
      </div>
      
     
    </div>
  )
}

export default Home
