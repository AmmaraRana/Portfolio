import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <div className='mt-6'>
        <hr />
        <footer className='py-6'> {/* Reduced padding from py-12 to py-6 */}
          <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/ammara-rana-9b29ba212/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/AmmaraRana" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
              </div>
              <div className='border-gray-700 pt-2 flex flex-col items-center'> {/* Reduced padding from pt-8 to pt-2 */}
                <p className='text-sm'>
                  &copy; 2024, All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;


