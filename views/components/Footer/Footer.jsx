import React from 'react';
import logo from '../../../public/Logo.svg'
import InstagramIcon from '../../../public/Footer Icon/Instagram Icon.svg'
import TwitterIcon from '../../../public/Footer Icon/Twitter Icon.svg'
import MetaIcon from '../../../public/Footer Icon/Meta Icon.svg'
import YoutubeIcon from '../../../public/Footer Icon/Youtube Icon.svg'

const Footer = () => {
    return (

        //Footer code Start
        <div className="bg-gradient-to-r md:pl-16 md:pr-16 bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
            <div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Footer logo and company name */}
                    <div className='flex '>
                        <img src={logo} className="mr-2 h-6 sm:h-8" alt="logo" />
                        <p className=" mt-[2px] text-[20px] text-[#101219]">
                            Optiplan
                        </p>

                    </div>
                    {/* footer row */}
                    <div className="grid grid-cols-1 gap-10 lg:-ml-32 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Footer first row */}
                        <div>
                            <p className="font-medium text-[#101219]">
                                Company
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5F6065]">
                                <a className="hover:opacity-75" href> About Us </a>
                                <a className="hover:opacity-75" href> Contact </a>
                                <a className="hover:opacity-75" href>Careers </a>
                                <a className="hover:opacity-75" href>Our Team</a>
                            </nav>
                        </div>
                        {/* Footer second row  */}
                        <div>
                            <p className="font-medium text-[#101219]">
                                Features
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5F6065]">
                                <a className="hover:opacity-75" href> Task Management </a>
                                <a className="hover:opacity-75" href> Collaboration Tools </a>
                                <a className="hover:opacity-75" href> Reporting and Analytics </a>
                                <a className="hover:opacity-75" href> Reporting and Analytics </a>
                                <a className="hover:opacity-75" href> Integrations</a>
                            </nav>
                        </div>
                        {/* Footer third row  */}
                        <div>
                            <p className="font-medium text-[#101219]">
                                Resources
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5F6065]">
                                <a className="hover:opacity-75" href> Docs </a>
                                <a className="hover:opacity-75" href> Blog </a>
                                <a className="hover:opacity-75" href> Blog </a>
                                <a className="hover:opacity-75" href> Pricing </a>
                                <a className="hover:opacity-75" href> Testimonials </a>
                            </nav>
                        </div>
                        {/* Footer four row and Icon */}
                        <div className="flex md:-mt-[140px] space-x-6 text-[#5F6065]">

                            <img src={InstagramIcon} alt="" className='w-[48px]' />
                            <img src={TwitterIcon} alt="" className='w-[48px]' />
                            <img src={MetaIcon} alt="" className='w-[48px]' />
                            <img src={YoutubeIcon} alt="" className='w-[48px]' />



                        </div>
                    </div>
                    {/* Footer row end */}
                </div>
                {/* Footer copyright text */}
                <div className='md:flex justify-between'>
                    <p className="mt-8 text-base text-[#B5B6B8]">
                        © Copyright Optiplan 2024
                    </p>
                    <nav className="flex md:flex-row flex-col mt-[30px]  gap-[40px]  text-base font-normal text-[#B5B6B8]">
                        <a className="hover:opacity-75" href> FAQ </a>
                        <a className="hover:opacity-75" href> Terms of Condition</a>
                        <a className="hover:opacity-75" href> Privacy Policy </a>
                    </nav>
                </div>
            </div>
        </div>
        // Footer code End

    );
};

export default Footer;