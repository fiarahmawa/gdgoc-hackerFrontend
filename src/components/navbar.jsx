import heroImage from '../assets/GDGoC-UGM-identity.png';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-lineGrey sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12 lg:px-[64px] py-4 md:py-[30px]">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('landing')}>
          <img src={heroImage} alt="Logo" className="h-8 md:h-10 object-contain" />
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-[8px] font-base text-sm font-regular text-brandGrey">
          <button 
            onClick={() => handleNavClick('landing')} 
            className={`py-[14px] px-[20px] rounded-[100px] transition-all ${
              currentPage === 'landing' 
                ? 'text-textBlue bg-brandLightBlue font-bold' 
                : 'hover:text-blue-600 font-normal'
            }`}
          >
            Home
          </button>

          <button 
            onClick={() => handleNavClick('about')} 
            className={`py-[14px] px-[20px] rounded-[100px] transition-all ${
              currentPage === 'about' 
                ? 'text-textBlue bg-brandLightBlue font-bold' 
                : 'hover:text-blue-600 font-normal'
            }`}
          >
            About
          </button>

          <button 
            onClick={() => handleNavClick('overview')} 
            className={`py-[14px] px-[20px] rounded-[100px] transition-all ${
              currentPage === 'overview' 
                ? 'text-textBlue bg-brandLightBlue font-bold' 
                : 'hover:text-blue-600 font-normal'
            }`}
          >
            Overview
          </button>

          <button 
            onClick={() => handleNavClick('contact')} 
            className={`py-[14px] px-[20px] rounded-[100px] transition-all ${
              currentPage === 'contact' 
                ? 'text-textBlue bg-brandLightBlue font-bold' 
                : 'hover:text-blue-600 font-normal'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Button Desktop */}
        <div className="hidden lg:block">
          <button 
            onClick={() => handleNavClick('overview')}
            className="w-[197px] bg-brandBlue hover:bg-blue-600 text-white font-base text-[16px] font-medium px-[24px] py-3 rounded-[8px] transition-all shadow-sm flex items-center justify-between gap-[16px]"
          >
            Find your track
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brandDarkGrey focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-lineGrey shadow-lg py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <button 
            onClick={() => handleNavClick('landing')} 
            className={`text-left py-3 px-4 rounded-[12px] transition-all ${
              currentPage === 'landing' ? 'text-textBlue bg-brandLightBlue font-bold' : 'text-brandGrey font-normal'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={`text-left py-3 px-4 rounded-[12px] transition-all ${
              currentPage === 'about' ? 'text-textBlue bg-brandLightBlue font-bold' : 'text-brandGrey font-normal'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('overview')} 
            className={`text-left py-3 px-4 rounded-[12px] transition-all ${
              currentPage === 'overview' ? 'text-textBlue bg-brandLightBlue font-bold' : 'text-brandGrey font-normal'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className={`text-left py-3 px-4 rounded-[12px] transition-all ${
              currentPage === 'contact' ? 'text-textBlue bg-brandLightBlue font-bold' : 'text-brandGrey font-normal'
            }`}
          >
            Contact
          </button>
          
          <button 
            onClick={() => handleNavClick('overview')}
            className="w-full bg-brandBlue hover:bg-blue-600 text-white font-base text-[16px] font-medium px-6 py-3 rounded-[8px] transition-all shadow-sm flex items-center justify-center gap-[16px] mt-2"
          >
            Find your track
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </nav>
  );
}