import React from 'react';
import logo from '../../../public/Sponsor Section Image/Logo.svg';
import logo1 from '../../../public/Sponsor Section Image/Logo-1.svg';
import logo2 from '../../../public/Sponsor Section Image/Logo-2.svg';
import logo3 from '../../../public/Sponsor Section Image/Logo-3.svg';
import logo4 from '../../../public/Sponsor Section Image/Logo-4.svg';

const SponsorPage = () => {
    return (
        // website Sponsor Section start
        <div className='md:mt-16 mb-16 mt-16 bg-[#F9F9FA] '>
           <div className='md:flex  ml-16 mr-16 pt-8 pb-8'>
            {/* Sponsor Section text */}
           <div>
                <p className='text-[#919295]  font-medium md:text-base text-[12px] md:mb-0 mb-3 '> Trusted by more than 10,000 businesses <br />
                    from various industries</p>
            </div>
            <div className='lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 grid grid-cols-2  md:gap-12 gap-5'>
                {/* Sponsor Section logo */}
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
           </div>
        </div>
        // website Sponsor Section End
    );
};

export default SponsorPage;