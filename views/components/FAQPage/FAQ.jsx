import React from 'react';

const FAQ = () => {
    return (
        // FAQ Code Start
        <div>
             <p className='text-[#101219] mt-[120px] md:ml-0  font-medium text-center lg:text-5xl md:text-3xl text-2xl'>Frequently Asked Question
            </p>
          
            <div className='max-w-[636px] pl-5 mt-16 mx-auto'>
                   {/* Faq first question */}
            <div className="collapse  items-center collapse-arrow md:w-[622px] w-[340px] mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title  bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
<p className='md:pl-8 text-[#101219] md:text-[24px]  font-semibold'>  What is project management software</p>
  </div>
  <div className="collapse-content bg-[#FFF] border-[#91929533] border-[1px] solid mt-2"> 
    <p className='md:p-8 text-[#5F6065] text-18px font-normal'>Project management software is a tool that helps teams plan, execute, and track projects effectively. It facilitates collaboration, streamlines workflows, and ensures tasks are completed on time and within budget.</p>
  </div>
</div>
                   {/* Faq second question */}
            <div className="collapse  items-center collapse-arrow md:w-[622px] w-[340px] mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title  bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
<p className='md:pl-8 text-[#101219] md:text-[24px]  font-semibold'>  Is Optiplan suitable for my team size?</p>
  </div>
  <div className="collapse-content bg-[#FFF] border-[#91929533] border-[1px] solid mt-2"> 
    <p className='md:p-8 text-[#5F6065] text-18px font-normal'>Optiplan suits various team sizes, from small to large, with scalable task management and collaboration features. Its user-friendly interface, customization options, and robust support make it adaptable and efficient for your team's specific needs.
</p>
  </div>
</div>
                   {/* Faq third question */}
            <div className="collapse  items-center collapse-arrow md:w-[622px] w-[340px] mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title  bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
<p className='md:pl-8 text-[#101219] md:text-[24px]  font-semibold'> Can I customize Optiplan to fit my workflow?</p>
  </div>
  <div className="collapse-content bg-[#FFF] border-[#91929533] border-[1px] solid mt-2"> 
    <p className='md:p-8 text-[#5F6065] md:text-18px font-normal'>Yes, you can customize Optiplan to fit your workflow. It offers flexible options for task management, project templates, and integration with other tools, allowing you to tailor its features to meet your team's specific requirements.</p>
  </div>
</div>
                   {/* Faq four question */}
            <div className="collapse  items-center collapse-arrow md:w-[622px] w-[340px] mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title  bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
<p className='md:pl-8 text-[#101219] md:text-[24px]  font-semibold'> Does Optiplan offer customer support?</p>
  </div>
  <div className="collapse-content bg-[#FFF] border-[#91929533] border-[1px] solid mt-2"> 
    <p className='md:p-8 text-[#5F6065] text-18px font-normal'>Optiplan offers customer support. They provide various support options, including email, live chat, and a knowledge base, ensuring users can get assistance with any issues or questions they may have.</p>
  </div>
</div>
                   {/* Faq five question */}
            <div className="collapse  items-center collapse-arrow md:w-[622px] w-[340px] mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title  bg-[#F9F9FA] border-[#91929533] border-[1px] solid">
<p className='md:pl-8 text-[#101219] md:text-[24px]  font-semibold'> Can I integrate Optiplan with other tools?</p>
  </div>
  <div className="collapse-content bg-[#FFF] border-[#91929533] border-[1px] solid mt-2"> 
    <p className='md:p-8 text-[#5F6065] text-18px font-normal'>Optiplan can be integrated with other tools. It supports integration with popular applications such as Slack, Trello, and Google Calendar, allowing seamless workflow and improved productivity by connecting with your existing tools and systems.</p>
  </div>
</div>

            </div>
        </div>
        // FAQ Code End
    );
};

export default FAQ;