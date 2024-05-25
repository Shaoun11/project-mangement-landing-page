import React from 'react';
import banner from '../../../public/Banner.svg'


const Hero = () => {
    return (

        // website hero page start

        <div className="hero min-h-[calc(100vh-78px)] flex md:flex-row flex-col ">

            {/*Website Hero Page text*/}

            <div className="ml-16 ">
                <div className='flex lg:mt-0 md:mt-6 mt-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="8" height="9" className='mt-[6px] ' viewBox="0 0 8 9"
                         fill="none">
                        <circle cx="4" cy="4.5" r="4" fill="#3B68FF"/>
                    </svg>
                    <p className='ml-2 text-[#3B68FF] font-medium'>Optiplan Pro is now 50% off!</p>
                </div>
                <h2 className='lg:text-[64px] md:text-[32px] text-[24px] text-[#101219] lg:leading-[85px] mt-3  font-medium'>From
                    Planning to <br/> Execution, Let’s <br/>
                    Realize Your Vision</h2>
                <p className=" mt-6 text-[16px] font-normal text-[#5F6065] ">
                    Our tools and methodologies are designed to streamline every phase. With our support, you
                    can <br/> confidently navigate the
                    path from ideation to execution, bringing your vision to life with precision <br/> and efficiency.
                </p>

                <div className="mt-12">
                    <button
                        className="btn  btn-primary bg-[#3B68FF] text-white md:pl-5 md:pr-5 border-none rounded-xl  ">Get
                        Started
                    </button>
                    <button
                        className="btn ml-6  border-[1px] border-solid border-[#91929526] btn-primary bg-[#F9F9FA] text-black md:pl-5 md:pr-5  rounded-xl  ">Learn
                        More
                    </button>
                </div>

            </div>

            {/*Use website Hero page Image*/}

            <div>
                <img src={banner} alt="DevGenius Hero Page Banner Image" className='w-[598px] md:mt-0  mt-2  lg:ml-12'/>

            </div>
        </div>

        // website hero page End
    );
};

export default Hero;