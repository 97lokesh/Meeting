// import React from 'react'

// function Home() {
//   return (
//     <>
//     <div className='w-[800px]  p-5 mt-24 mx-auto'>
//         <h1 className='font-black my-2 text-2xl'>"Effortless Meetings, Anytime, Anywhere"</h1>
//         <img className='object-cover rounded-lg' src="https://static.vecteezy.com/system/resources/thumbnails/017/556/020/small_2x/business-people-meeting-using-laptop-computer-calculator-notebook-stock-market-chart-paper-for-analysis-plans-to-improve-quality-next-month-conference-discussion-corporate-concept-photo.jpg" alt="" />
//         <h1 className='text-neutral-900'>"This meeting app is designed to streamline communication and collaboration for teams and individuals. With an intuitive interface, users can schedule, join, and manage meetings effortlessly.</h1>
//     </div>
//     </>
//   )
// }

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Container */}
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl space-y-6">
        
        {/* Heading Section */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          "Effortless Meetings, Anytime, Anywhere"
        </h1>

        {/* Image Section */}
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/017/556/020/small_2x/business-people-meeting-using-laptop-computer-calculator-notebook-stock-market-chart-paper-for-analysis-plans-to-improve-quality-next-month-conference-discussion-corporate-concept-photo.jpg"
            alt="Business Meeting"
          />
          {/* Overlay (Optional) */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Description Section */}
        <h2 className="text-lg text-gray-700 text-center">
          "This meeting app is designed to streamline communication and collaboration for teams and individuals. With an intuitive interface, users can schedule, join, and manage meetings effortlessly."
        </h2>

        {/* Call to Action Button (Optional) */}
        <div className="text-center">
          <Link to='/meeting' className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
