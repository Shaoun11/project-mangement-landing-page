import React from 'react';
import user1 from'../../../public/Pricing Section Image/Icon Container.svg'
import user2 from'../../../public/Pricing Section Image/Users.svg'
import check from'../../../public/Pricing Section Image/Check.svg'
import checkwhite from'../../../public/Pricing Section Image/Check-White.svg'
import checkDeepwhite from'../../../public/Pricing Section Image/CheckDeepWhite.svg'
import checkBlue from'../../../public/Pricing Section Image/CheckBlue.svg'
import user3 from'../../../public/Pricing Section Image/Users Three.svg'

const Pricing = () => {
    return (
        <div>
            <p className='text-[#101219] font-medium text-center lg:text-5xl md:text-3xl text-2xl'>Choose The Plan That Best Fits <br />
                Your Team's Needs and Budget
            </p>
            <p className='text-base font-normal text-center mt-6 text-[#5F6065]'>
                Discover affordable solutions tailored to your project management goals and resources
            </p>
            
            {/* Pricing toggle */}
            <div className="mb-16 space-y-4 mt-16   text-center">
			<div className='flex gap-1 justify-center '>
				<div className='bg-[#F9F9FA] border-[#91929533] border-[1px] solid rounded-full p-1'>
                <button className="px-8 py-3  font-semibold border rounded-full  bg-[#3B68FF] dark:text-gray-50">Monthly</button>
                <button className="px-8 py-3 font-semibold text-[#3B68FF] rounded-full ">Yearly</button>
                </div>
				
			</div>
		</div>
        {/* Pricing Card Start */}
        <div className='grid  lg:grid-cols-3 md:grid-cols-1 lg:ml-0 md:ml-28  md:pl-16 md:pr-16'>
        {/* Pricing card:1 */}
        <div className="p-4 w-[416px]">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <div className='pl-8 pr-8 pt-4 pb-4 bg-[#F9F9FA] border-[#91929533] border-[1px] solid rounded-xl '>
                <div className='flex gap-2'>
                    <img src={user1} alt="" className='w-[24px] h-[24px]  ' />
                    <div>
                        <p className='text-[14px] mt-[2px] font-medium text-[#5F6065]'>Personal</p>
                    </div>
                </div>
            
            <h1 className="text-[32px] text-[#101219] font-semibold mt-3 leading-none">$0/month</h1>
            </div>
         <div className='mt-8' >
         <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Team Collaboration Tools
            </p>
            <p className="flex items-center text-[#404147]  mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Priority Support
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Integration Capabilities
            </p>
            <p className="flex items-center text-[#B5B6B8] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Customizable Workflows
            </p>
            <p className="flex items-center text-[#B5B6B8] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Project Size-Based Pricing
            </p>
            <p className="flex items-center text-[#B5B6B8] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Unlimited Projects
            </p>
            <p className="flex items-center text-[#B5B6B8] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Analytics and Reporting
            </p>
         </div>
            <button className="text-center  mt-12 mb-4 text-[#FFF] bg-[#3B68FF] border-0 py-4 px-8  hover:bg-gray-500  font-semibold rounded-xl">Learn More  </button>
            
        </div>
    </div>

       {/* Pricing card:2 */}
       <div className="p-4  w-[416px]">
        <div className="h-full p-6 rounded-lg border-2  bg-[#3B68FF] flex flex-col relative overflow-hidden">
            <div className='pl-8 pr-8 pt-4 pb-4 bg-[#6286FF] border-[#91929533] border-[1px] solid rounded-xl '>
                <div className='flex gap-2'>
                    <img src={user2} alt="" className='w-[24px] h-[24px]  ' />
                    <div>
                        <p className='text-[14px] mt-[2px] font-medium text-[#F9F9FA]'>Team</p>
                    </div>
                </div>
            
            <h1 className="text-[32px] text-[#F9F9FA] font-semibold mt-3 leading-none">$49/month</h1>
            </div>
         <div className='mt-8' >
         <p className="flex items-center text-[#FFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center  rounded-full flex-shrink-0"> <img src={checkDeepwhite} alt="" /> </span>Team Collaboration Tools
            </p>
            <p className="flex items-center text-[#FFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkDeepwhite} alt="" /> </span>Priority Support
            </p>
            <p className="flex items-center text-[#FFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkDeepwhite} alt="" /> </span>Integration Capabilities
            </p>
            <p className="flex items-center text-[#FFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkDeepwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Customizable Workflows
            </p>
            <p className="flex items-center text-[#FFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkDeepwhite} alt="" className='text-[#B5B6B8]cd' /> </span>Project Size-Based Pricing
            </p>
            <p className="flex items-center text-[#A5BAFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkBlue} alt="" className='text-[#B5B6B8]cd' /> </span>Unlimited Projects
            </p>
            <p className="flex items-center text-[#A5BAFF] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={checkBlue} alt="" className='text-[#B5B6B8]cd' /> </span>Analytics and Reporting
            </p>
         </div>
            <button className="text-center  mt-12 mb-4 text-[#101219] bg-[#F9F9FA] border-0 py-4 px-8  hover:bg-gray-500  font-semibold rounded-xl">Learn More  </button>
            
        </div>
    </div>
       {/* Pricing card:3 */}
       <div className="p-4 w-[416px]">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <div className='pl-8 pr-8 pt-4 pb-4 bg-[#F9F9FA] border-[#91929533] border-[1px] solid rounded-xl '>
                <div className='flex gap-2'>
                    <img src={user3} alt="" className='w-[24px] h-[24px]  ' />
                    <div>
                        <p className='text-[14px] mt-[2px] font-medium text-[#5F6065]'>Enterprise</p>
                    </div>
                </div>
            
            <h1 className="text-[32px] text-[#101219] font-semibold mt-3 leading-none">$99/month</h1>
            </div>
         <div className='mt-8' >
         <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Team Collaboration Tools
            </p>
            <p className="flex items-center text-[#404147]  mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Priority Support
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" /> </span>Integration Capabilities
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" className='text-[#B5B6B8]cd' /> </span>Customizable Workflows
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" className='text-[#B5B6B8]cd' /> </span>Project Size-Based Pricing
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" className='text-[#B5B6B8]cd' /> </span>Unlimited Projects
            </p>
            <p className="flex items-center text-[#404147] mb-6">
                <span className="w-4 h-4 mr-2 inline-flex font-medium items-center justify-center   rounded-full flex-shrink-0"> <img src={check} alt="" className='text-[#B5B6B8]cd' /> </span>Analytics and Reporting
            </p>
         </div>
            <button className="text-center  mt-12 mb-4 text-[#FFF] bg-[#3B68FF] border-0 py-4 px-8  hover:bg-gray-500  font-semibold rounded-xl">Learn More  </button>
            
        </div>
    </div>
        </div>
        </div>
    );
};

export default Pricing;