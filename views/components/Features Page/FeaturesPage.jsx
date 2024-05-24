import React from 'react';
import fetureimg1 from '../../../public/Feture Section Image/Images.svg'
import fetureimg2 from '../../../public/Feture Section Image/Kanban Card.svg'
import fetureimg3 from '../../../public/Feture Section Image/Kanban Card (1).svg'
import fetureimg4 from '../../../public/Feture Section Image/Content.svg'
import fetureimg5 from '../../../public/Feture Section Image/Tracker Card.svg'
const FeaturesPage = () => {
    return (
        // Feature Page Start
        <div className='lg:mt-32 md:mt-[300px] mt-[200px] mb-28'>
            {/* Feature Page text */}
            <p className='text-[#101219] font-medium text-center lg:text-5xl md:text-3xl text-2xl'>Let's Move into Optiplan: <br />
                Your Partner in Project Excellence</p>
            <p className='text-base font-normal text-center mt-6 text-[#5F6065]'>
                Experience seamless collaboration, streamlined workflows, and data-driven decision-making with Optiplan
            </p>

            <div className='lg:flex  md:ml-16 ml-3  md:mr-16 mt-16 gap-6 '>
               {/* Feature Page First Card */}
                <div className='flex  pl-12 pr-12 bg-[#F9F9FA] lg:w-[714px] md:w-[650px] w-[430px]   md:h-[400px]   border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div className=''>
                        <div>
                            <img src={fetureimg3} alt="" />
                        </div>
                        <div>
                            <img src={fetureimg2} alt="" className='relative w-[600px] mt-[54px]' />
                        </div>
                    </div>
                    <div className='pt-12 pb-12 '>
                        <h1 className='text-[#101219] md:text-[32px] text-[16px]'>Customizable <br />
                            Kanban Board</h1>
                        <p className='text-[#5F6065] mt-4  md:text-base text-xs font-normal'>
                            Tailor your workflow to fit your  team's unique needs with our  customizable Kanban board.
                        </p>
                        <div className='mt-8 '>
                            <button
                                className="btn   bg-[#101219]  text-white md:pl-8 md:pr-8 border-none rounded-xl  ">Lern
                                More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Feature Page Second Card */}
                <div className='flex lg:mt-0 md:mt-6 mt-6  pl-12 pr-12 bg-[#F9F9FA] lg:w-[520px] md:w-[650px] w-[430px]   md:h-[400px]    border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div >
                        <div>
                            <img src={fetureimg4} alt="" className='pt-12 w-[600px] -ml-[48px]' />
                        </div>

                    </div>
                    <div className='pt-12 pb-12 -ml-8'>
                        <h1 className='text-[#101219] md:text-[32px] text-[16px]'>Easy to Drag
                            and Drop</h1>
                        <p className='text-[#5F6065] mt-4 md:text-base text-xs font-normal'>
                            Tailor your workflow to fit your  team's unique needs with our  customizable Kanban board.
                        </p>
                        <div className='mt-8'>
                            <button
                                className="btn  btn-primary bg-[#101219] text-white md:pl-8 md:pr-8 border-none rounded-xl  ">Lern
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex mt-6  md:ml-16 md:mr-16 ml-3 gap-6 '>
            {/* Feature Page Third Card */}
                <div className='flex gap-4 pl-12 pr-12 bg-[#F9F9FA] lg:w-[520px] md:w-[650px] w-[430px]  md:h-[400px]   border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div >
                        <div>
                            <img src={fetureimg1} alt="" className='pt-10 lg:w-[500px] md:w-[300px] w-[300px] -ml-[48px]' />
                        </div>

                    </div>
                    <div className='pt-12 pb-12 md:-ml-8'>
                        <h1 className='text-[#101219] md:text-[32px] text-[16px]'>Exclusive Community</h1>
                        <p className='text-[#5F6065] mt-4 md:text-base text-xs font-normal'>
                            Join a thriving community of like-minded people around the world.
                        </p>
                        <div className='mt-8'>
                            <button
                                className="btn  btn-primary bg-[#101219] text-white md:pl-8 md:pr-8 border-none rounded-xl  ">Lern
                                More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Feature Page Four Card */}
                <div className='flex gap-4 pl-12 pr-12 bg-[#F9F9FA] lg:w-[714px] md:w-[650px] w-[430px] lg:mt-0 md:mt-6 mt-6 border-[1px] border-solid rounded-[12px] border-[#91929533]'>
                    <div >
                        <div>
                            <img src={fetureimg5} alt="" className='pt-20 md:pt-16 w-[620px] ' />
                        </div>

                    </div>
                    <div className='pt-12 pb-12 md:ml-4'>
                        <h1 className='text-[#101219] md:text-[32px] text-[16px]'>Easily Track
                            Your Progress</h1>
                        <p className='text-[#5F6065] mt-4 md:text-base text-xs font-normal'>
                            Monitor project milestones, task completion rates, and overall progress at a glance.
                        </p>
                        <div className='mt-8'>
                            <button
                                className="btn  btn-primary bg-[#101219] text-white md:pl-8 md:pr-8 border-none rounded-xl  ">Lern
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         // Feature Page End
    );
};

export default FeaturesPage;