import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className='flex justify-between items-center p-4 text-black h-[64px]'>
      <div>
        <Link to="/"><h1 className='text-[24px] font-bold text-white'>TelehealthApp</h1></Link>
      </div>

      <div className='hidden md:flex md:space-x-4'>
        <Link to="/" className='hover:text-blue-800 hover:bg-white px-4 rounded-md py-2 text-[16px] font-bold'>Home</Link>
        <Link to="/services" className='hover:text-blue-800 hover:bg-white px-4 rounded-md py-2 text-[16px] font-bold'>Services</Link>
        <Link to="/appointments" className='hover:text-blue-800 hover:bg-white px-4 rounded-md py-2 text-[16px] font-bold'>Appointments</Link>
        <Link to="/contact" className='hover:text-blue-800 hover:bg-white px-4 rounded-md py-2 text-[16px] font-bold'>Contact Us</Link>
      </div>

      <div className='flex items-center space-x-4'>
        <div
          className='relative flex items-center'
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          <FaUserCircle className='w-8 h-8 rounded-full cursor-pointer' />
          {isTooltipVisible && (
            <div className='absolute top-full right-0 mt-2 bg-blue-700 text-white text-md px-3 py-1 rounded-lg'>
              Profile
            </div>
          )}
        </div>
        
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full bg-blue-600 p-4 sm:w-[150px] space-y-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <div className='flex justify-end'>
          <button onClick={toggleMenu} className='text-white text-lg'>
            <FaTimes />
          </button>
        </div>

        <Link to="/" className='block text-[16px] py-2 px-4 hover:bg-blue-700 rounded'>Home</Link>
        <Link to="/services" className='block text-[16px] py-2 px-4 hover:bg-blue-700 rounded'>Services</Link>
        <Link to="/appointments" className='block text-[16px] py-2 px-4 hover:bg-blue-700 rounded'>Appointments</Link>
        <Link to="/contact" className='block text-[16px] py-2 px-4 hover:bg-blue-700 rounded'>Contact Us</Link>

        <Link to="/profile" className='block bg-blue-700 hover:bg-blue-800 text-[16px] py-2 px-4 rounded'>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
