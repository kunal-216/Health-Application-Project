import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#909fbc] text-white py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='mb-6 md:mb-0'>
            <h1 className='text-2xl font-bold mb-2'>TelehealthApp</h1>
            <p className='text-sm'>
              Providing accessible healthcare services remotely. Your health, our priority.
            </p>
          </div>

          <div className='flex flex-col md:flex-row mb-6 md:mb-0'>
            <div className='mb-6 md:mb-0 md:mr-12'>
              <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
              <ul className='space-y-2'>
                <li><Link to="/" className='hover:text-gray-300'>Home</Link></li>
                <li><Link to="/services" className='hover:text-gray-300'>Services</Link></li>
                <li><Link to="/appointments" className='hover:text-gray-300'>Appointments</Link></li>
                <li><Link to="/contact" className='hover:text-gray-300'>Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-semibold mb-4'>Contact Us</h2>
              <ul className='space-y-2'>
                <li>Email: <a href="mailto:support@telehealthapp.com" className='hover:text-gray-300'>support@telehealthapp.com</a></li>
                <li>Phone: <a href="tel:+1234567890" className='hover:text-gray-300'>+123 456 7890</a></li>
                <li>Address: 123 Health St, Wellness City, HC 12345</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-start space-x-4 mt-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300'><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300'><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300'><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300'><FaInstagram /></a>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-4 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} TelehealthApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
