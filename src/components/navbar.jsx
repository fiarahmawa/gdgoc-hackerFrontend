import heroImage from '../assets/GDGoC-UGM-identity.png';
import { ArrowRight } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="w-[1440px] mx-auto flex justify-between items-center pl-[64px] pr-[64px] pb-[30px] pt-[30px] bg-white border-b border-lineGrey">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={heroImage} alt="Logo" className="h-10" />
      </div>

      {/* Menu */}
      <div className="flex items-center gap-[8px] font-base text-sm font-regular text-brandGrey">
        {/* Tombol Home */}
        <button 
          onClick={() => setCurrentPage('landing')} 
          className={`pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[100px] transition-all ${
            currentPage === 'landing' 
              ? 'text-textBlue bg-brandLightBlue font-bold' 
              : 'hover:text-blue-600 font-normal'
          }`}
        >
          Home
        </button>

        {/* Tombol About */}
        <button 
          onClick={() => setCurrentPage('about')} 
          className={`pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[100px] transition-all ${
            currentPage === 'about' 
              ? 'text-textBlue bg-brandLightBlue font-bold' 
              : 'hover:text-blue-600 font-normal'
          }`}
        >
          About
        </button>

        {/* Tombol Overview (bisa disesuaikan nanti jika sudah ada halamannya) */}
        <button 
          onClick={() => setCurrentPage('overview')} 
          className={`pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[100px] transition-all ${
            currentPage === 'overview' 
              ? 'text-textBlue bg-brandLightBlue font-bold' 
              : 'hover:text-blue-600 font-normal'
          }`}
        >
          Overview
        </button>

        {/* Tombol Contact */}
        <button 
          onClick={() => setCurrentPage('contact')} 
          className={`pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[100px] transition-all ${
            currentPage === 'contact' 
              ? 'text-textBlue bg-brandLightBlue font-bold' 
              : 'hover:text-blue-600 font-normal'
          }`}
        >
          Contact
        </button>
      </div>

      {/* Button */}
      <button className="w-[197px] bg-brandBlue hover:bg-blue-600 text-white font-base text-[16px] font-medium pr-[24px] pl-[24px] py-3 rounded-[8px] transition-all shadow-sm flex items-center gap-[16px]">
        Find your track
        <ArrowRight size={20} />
      </button>
    </nav>
  );
}