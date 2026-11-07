import heroImage from '../assets/GDGoC-UGM-identity.png';
import { ArrowRight } from 'lucide-react';
export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="w-[1440px] mx-auto flex justify-between items-center pl-[64px] pr-[64px] pb-[30px] pt-[30px] bg-white border-b border-lineGrey">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={heroImage} alt="Logo" className="h-10" />
        
      </div>

      {/* Menu */}
      <div className="flex items-center gap-[8px] font-base text-sm font-regular text-brandGrey">
        <button onClick={() => setCurrentPage('landing')} className="text-textBlue bg-brandLightBlue pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[100px] font-bold">Home</button>
        <button onClick={() => setCurrentPage('about')} className="hover:text-blue-600 pt-[14px] pr-[20px] pb-[14px] pl-[20px]">About</button>
        <button className="hover:text-blue-600 pt-[14px] pr-[20px] pb-[14px] pl-[20px]">Overview</button>
        <button className="hover:text-blue-600 pt-[14px] pr-[20px] pb-[14px] pl-[20px]">Contact</button>
      </div>

      {/* Button */}
      <button className="w-[197px] bg-brandBlue hover:bg-blue-600 text-white font-base text-[16px] font-medium pr-[24px] pl-[24px] py-3 rounded-[8px] transition-all shadow-sm flex items-center gap-[16px]">
        Find your track
        <ArrowRight size={20} />
      </button>
    </nav>
  );
}