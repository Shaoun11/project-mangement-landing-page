import React from 'react';


const Navbar = () => {
    return (
        <div>
            <div className="navbar mt-4 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a>Submenu </a></li>
            <li><a>Submenu </a></li>
          </ul>
        </details>
      </li>
        
          <li>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            <li><a>Submenu</a></li>
            <li><a>Submenu </a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
      <li><a>Community</a></li>
       
      </ul>
    </div>
   <div className='md:ml-16 flex'>
   <img src="https://svgshare.com/i/16Nw.svg" className='' alt="" />
    <a className=" text-xl font-medium ml-2 mt-[3px]">Optiplan</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      <li>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a>Submenu </a></li>
            <li><a>Submenu </a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            <li><a>Submenu</a></li>
            <li><a>Submenu </a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
      <li><a>Community</a></li>
    </ul>
  </div>
  <div className="navbar-end md:mr-16">
    <a className="btn text-white md:pl-6 md:pr-6 btn-primary bg-black border-none">30-days Free Trial</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;