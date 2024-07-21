import React, { useState } from 'react';
import pic from '../public/pic.jpg';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const navitem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Expertise" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md'>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex items-center'>
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <div className='ml-4'>
            <h1 className="font-semibold text-xl cursor-pointer">
              Ammara <span className="text-green-500 text-2xl">Rana</span>
            </h1>
            <p className="text-sm">Android Developer | Web Developer</p>
          </div>
        </div>
        
        {/* desktop navbar */}
        <div>
          <ul className='hidden md:flex space-x-6'>
            {navitem.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className='hover:text-green-500 cursor-pointer'
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
            {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
          </div>
        </div>
      </div>
      
      {/* mobile navbar */}
     {menu && (
  <div >
     <div className='fixed top-16 left-0 w-full bg-white z-50'>
     <ul className='flex flex-col items-center space-y-4 py-4'>
      {navitem.map(({ id, text }) => (
        <li key={id}>
          <Link
            to={text.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            className='hover:text-green-500 cursor-pointer'
            onClick={() => setMenu(false)}  // Close the menu when a link is clicked
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>

    </div>
  </div>
)}
    </div>
  );
}

export default Nav;

