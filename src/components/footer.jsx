import heroImage from '../assets/GDGoC-UGM-identity.png';
import iconIg from '../assets/Instagram.png';
import iconYt from '../assets/youtube.png';

export default function Footer() {
  return (
    <div className="w-full bg-brandLightGrey border-t border-lineGrey">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[40px] md:py-[56px] flex flex-col gap-[32px]">
            
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[40px] pb-[32px] border-b border-lineGrey">
                
                <div className="w-full lg:w-[480px] flex flex-col gap-[20px]">
                    <div className="flex items-center gap-3">
                        <img src={heroImage} alt="Logo" className="h-8 md:h-10 object-contain" />
                    </div>
                    <p className="text-[15px] md:text-[16px] font-base font-normal text-brandGrey leading-relaxed">
                        A student community for curious minds, shared learning, and technology with purpose.
                    </p>
                </div>

                <div className="w-full sm:w-[150px] flex flex-col gap-[12px]">
                    <p className="text-[16px] font-base font-bold text-brandBlack">
                        Explore
                    </p>
                    <a href="#home" className="text-[15px] font-base font-normal text-brandGrey hover:text-textBlue transition-colors w-fit">
                        Home
                    </a>
                    <a href="#about" className="text-[15px] font-base font-normal text-brandGrey hover:text-textBlue transition-colors w-fit">
                        About
                    </a>
                    <a href="#overview" className="text-[15px] font-base font-normal text-brandGrey hover:text-textBlue transition-colors w-fit">
                        Overview
                    </a>
                    <a href="#contact" className="text-[15px] font-base font-normal text-brandGrey hover:text-textBlue transition-colors w-fit">
                        Contact
                    </a>
                </div>

                <div className="w-full lg:w-[260px] flex flex-col gap-[14px]">
                    <p className="text-[16px] font-base font-bold text-brandBlack">
                        Keep in the loop
                    </p>
                    <p className="text-[15px] font-base font-normal text-brandBlue">
                        @gdgoc.ugm
                    </p>
                    <div className="flex flex-row gap-[16px]">
                        <img
                            src={iconIg}
                            alt="Instagram"
                            className="w-[24px] h-[24px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        />
                        <img
                            src={iconYt}
                            alt="YouTube"
                            className="w-[24px] h-[24px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </div>
                    <p className="text-[15px] font-base font-normal text-brandGrey">
                        Learn together. Build together.
                    </p>
                </div>

            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-[12px] font-base font-normal text-brandGrey">
                    © GDGoC Universitas Gadjah Mada • 2026/2027
                </p>
                <p className="text-[12px] font-base font-normal text-brandGrey">
                    Made for the campus. Open to possibilities.
                </p>
            </div>

            <div className="w-[160px] flex items-center pt-2">
                <div className="flex w-full">
                    <span className="h-[4px] flex-1 bg-brandRed"></span>
                    <span className="h-[4px] flex-1 bg-brandOrange"></span>
                    <span className="h-[4px] flex-1 bg-brandGreen"></span>
                    <span className="h-[4px] flex-1 bg-brandBlue"></span>
                </div>
            </div>

        </div>
    </div>
  );
}