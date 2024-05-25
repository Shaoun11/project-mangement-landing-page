import React from 'react';

const AdbertiseBanner = () => {
    return (
        // Advertise banner page code start
        <div className='mt-[140px] mb-[140px] md:pl-16 pl-2 pr-1 md:pr-16 '>
             {/* Advertise banner page text and button */}
            <div
                className="bg-indigo-600  rounded-xl md:p-16 p-8 text-white  text-center sm:px-6 lg:px-8"
            >
                <p className="text-center text-[#FFF] md:text-[32px] text-lg font-medium ">
                Ready to Boost Your Team's Productivity? <br />
                
                </p>
                <p className='text-[#C2D0FF] text-center  md:text-[32px] text-lg font-medium mt-3'>Let’s explore Optiplan's intuitive solutions!</p>
                <div className="flex gap-6 justify-center">
                <a className="btn text-[#101219] border-[#91929533] border-[1px] solid  md:pl-6 md:pr-6 btn-primary bg-[#F9F9FA] mt-8 ">Start a Project</a>
                <a className="btn text-[#FFF] border-[#91929533] border-[1px] solid  md:pl-6 md:pr-6 btn-primary bg-[#101219] border-none mt-8 ">Contact Our Sales</a>
            </div>
               
            </div>
        </div>
        // Advertise banner page code End
    );
};

export default AdbertiseBanner;