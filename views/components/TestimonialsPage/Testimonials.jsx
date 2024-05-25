import React from 'react';
import Avatar from '../../../public/Testimonials Images/Avatar.svg';
import Rating from '../../../public/Testimonials Images/Rating.svg';
import Rating1 from '../../../public/Testimonials Images/Rating (1).svg';
import Rating2 from '../../../public/Testimonials Images/Rating (2).svg';

const Testimonials = () => {
    return (
        //Testimonials code start
        <div>
            <p className='text-[#101219] mt-[120px] font-medium text-center lg:text-5xl md:text-3xl text-2xl'>What They Thought <br />
                After Using Optiplan
            </p>
            {/* Testimonials Card Start */}
            <div className='grid lg:grid-cols-3 mt-16  grid-cols-1 lg:ml-0 md:ml-28  md:pl-16 md:pr-16 ml-2 gap-6'>
                {/* Testimonials Card:1 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">Sarah H.</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>Project Manager</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            "Optiplan revolutionized the way we  manage projects. With its intuitive
                            interface and powerful features,
                            we've been able to streamline our  workflow and boost productivity like  never before."
                        </p>
                    </blockquote>
                </div>
                {/* Testimonials Card:2 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">Michael T</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>Team Lead</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating1} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            "I've tried several project  management tools before, but none compare to Optiplan. It's user-
                            friendly, customizable, and has all  the features we need to stay  organized and on track.”
                        </p>
                    </blockquote>
                </div>
                {/* Testimonials Card:3 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">Emily L</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>Marketing Coordinator</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating1} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            “Optiplan has been a game-changer  for our team. The customizable  Kanban boards and easy drag-and- drop functionality make it effortless  to manage tasks and collaborate  with team members.”
                        </p>
                    </blockquote>
                </div>
                {/* Testimonials Card:4 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">Alex G.</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>CEO</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            "As a small business owner, finding  the right project management tool  was crucial. Optiplan not only met but exceeded our expectations. It's affordable, reliable, and has helped us achieve project success time.”
                        </p>
                    </blockquote>
                </div>
                {/* Testimonials Card:5 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">David R.</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>Operations Manager</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating2} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            "Optiplan's large community support has been invaluable. Being able to connect with other professionals, share insights, and learn from each other's experiences has enhanced our project management skills.”
                        </p>
                    </blockquote>
                </div>
                {/* Testimonials Card:6 */}
                <div>
                    <blockquote className="rounded-lg bg-[#FFF] border-[#91929533] border-[1px] solid p-8 md:w-[416px] w-[360px] h-[350px] shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={Avatar}
                                className="size-14 rounded-full object-cover" />
                            <div>
                                <p className="mt-0.5 text-[20px] font-semibold text-[#101219]">Rachel S.</p>
                                <p className='text-[14px] font-normal text-[#5F6065]'>Senior Developer</p>
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 mb-6 gap-0.5 text-green-500">
                            <img src={Rating2} alt="" />
                        </div>
                        <p className="mt-4 text-[#101219] font-normal md:text-[20px] text-base">
                            "Optiplan has truly transformed our project management process. With its easy-to-use interface and comprehensive tracking features, we've been able to stay on top of deadlines.”
                        </p>
                    </blockquote>
                </div>
            </div>
            {/* Testimonials Card End */}
            <div className="flex justify-center">
                <a className="btn text-[#101219] border-[#91929533] border-[1px] solid  md:pl-6 md:pr-6 btn-primary bg-[#F9F9FA] mt-8 ">See All Testimonials</a>
            </div>
        </div>
    );
};

export default Testimonials;