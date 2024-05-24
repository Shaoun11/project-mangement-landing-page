import React from 'react';
import icon1 from '../../../public/User-Support-Image/Icon Container.svg'
import icon2 from '../../../public/User-Support-Image/Icon Container (1).svg'
import icon3 from '../../../public/User-Support-Image/Icon Container (2).svg'
import image1 from '../../../public/User-Support-Image/User Image-1.png'
import image2 from '../../../public/User-Support-Image/User Image-2.png'
import image3 from '../../../public/User-Support-Image/User Image-3.png'
import image4 from '../../../public/User-Support-Image/User Image-4.png'
import PlayImage from '../../../public/User-Support-Image/Icon Play.svg'
const UserSupport = () => {
    return (

        // Website user-support-section start

        <div className='lg:flex mt-32 ml-16 mr-16 gap-12' >
            {/* user-support-section text and card */}
            <div className=''>
                <p className='md:text-5xl text-[20px] font-medium'>
                Have You Ever Experienced <br /> Endless Distractions?
                </p>
               <div className='mt-12'>
               <div className='flex gap-6  bg-[#F9F9FA] md:w-[646px]  w-[360px]  p-6 border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div>
                        <img src={icon1} alt="DevGenius Target Icon" className='mt-[6px]' />
                    </div>
                    <div >
                        <h1 className='text-[#101219] font-semibold md:text-xl text-base'>Lack of Clear Targets</h1>
                        <p className='text-[#5F6065] mt-1 font-normal md:text-base text-xs'>Goals and objectives are vague or constantly changing, making it <br /> difficult for teams to prioritize their work effectively.</p>
                    </div>
                </div>
                <div className='flex mt-5 gap-6 bg-[#F9F9FA] md:w-[646px] w-[360px]  p-6 border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div>
                        <img src={icon2} alt="DevGenius Support Icon" className='mt-[7px]' />
                    </div>
                    <div>
                        <h1 className='text-[#101219] font-semibold  md:text-xl text-base'>Communication Breakdowns</h1>
                        <p className='text-[#5F6065] mt-1 font-normal  md:text-base text-xs'>Miscommunications lead to misunderstandings, delays, and errors <br /> in project execution.</p>
                    </div>
                </div>
                <div className='flex mt-5 gap-6 bg-[#F9F9FA] md:w-[646px] w-[360px] p-6 border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div>
                        <img src={icon3} alt="DevGenius Calender Icon" className='mt-[7px]' />
                    </div>
                    <div>
                        <h1 className='text-[#101219] font-semibold md:text-xl text-base'>Inefficient Task Management</h1>
                        <p className='text-[#5F6065] mt-1 font-normal  md:text-base text-xs'>Tasks are managed haphazardly, leading to missed deadlines and <br /> overlooked responsibilities. </p>
                    </div>
                </div>
               </div>
            </div>
            {/* user-support-section iamge and playbutton */}
            <div className='md:mt-0 mt-6' >
            <div className='grid gap-5 grid-cols-2 '>
                <div>
                    <img src={image1} alt="DevGenius Image-1"  />
                </div>
                <div>
                    <img src={image2} alt="DevGenius Image-2" />
                </div>
                <div>
                    <img src={image3} alt="DevGenius Image-3" />
                </div>
                <div>
                    <img src={image4} alt="DevGenius Image-4" />
                </div>
                </div>

                <div>
                <div className=' relative md:-mt-[379px] md:ml-[245px] -mt-[220px] ml-[80px]'>
                    <img src={PlayImage} alt="DevGenius Play Image Icon" />
                </div>
              
                </div>
              
             
            </div>
        </div>
        // Website user-support-section End
    );
};

export default UserSupport;