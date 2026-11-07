import heroImage from '../assets/GDGoC-UGM-identity.png';
import iconIg from '../assets/Instagram.png';
import iconYt from '../assets/youtube.png';

export default function Footer({}) {
  return (
    <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[56px] pb-[28px] bg-brandLightGrey flex flex-row items-start justify-between gap-[40px]">
        <div className="w-[1248px]  flex flex-col items-start justify-between relative overflow-hidden">
            <div className="w-[1248px] flex flex-row items-start justify-between pb-[40px] ">
                <div className="w-[480px] flex flex-col gap-[24px]">
                    <div className="w-[382px] flex items-center gap-3">
                        <img src={heroImage} alt="Logo" className="h-10" />
                        
                    </div>
                    <p className="text-[16px] font-base font-regular  text-brandGrey">
                        A student community for curious minds, shared learning, and technology with purpose.
                    </p>
                </div>
                <div className="w-[150px] flex flex-col gap-[14px]">
                    <p className="text-[16px] font-base font-bold  text-brandBlack">
                    Explore
                    </p>
                    <p className="text-[15px] font-base font-regular  text-brandGrey">
                    Home
                    </p>
                    <p className="text-[15px] font-base font-regular  text-brandGrey">
                    About
                    </p>
                    <p className="text-[15px] font-base font-regular  text-brandGrey">
                    Overview
                    </p>
                    <p className="text-[15px] font-base font-regular  text-brandGrey">
                    Contact
                    </p>
                </div>
                <div className="w-[260px] flex flex-col gap-[14px]">
                    <p className="text-[16px] font-base font-bold  text-brandBlack">
                    Keep in the loop
                    </p>
                    <p className="text-[15px] font-base font-regular  text-brandBlue">
                    @gdgoc.ugm
                    </p>
                    <div className="w-[64px] flex flex-row gap-[16px]">
                        <img
                            src={iconIg}
                            alt="Logo"
                            className="w-[24px] h-[24px] object-cover"
                        />
                        <img
                            src={iconYt}
                            alt="Logo"
                            className="w-[24px] h-[24px] object-cover"
                        />
                    </div>
                    <p className="text-[15px] font-base font-regular  text-brandGrey">
                    Learn together. Build together.
                    </p>
                </div>
            </div>
            <div className="w-[1248px] pt-[40px] border-t border-lineGrey gap-[16px]">

            </div>
            <div className="w-[1248px] flex flex-row justify-between ">
                <p className="text-[12px] font-base font-regular  text-brandGrey">
                    © GDGoC Universitas Gadjah Mada • 2026/2027
                </p>
                <p className="text-[12px] font-base font-regular  text-brandGrey">
                    Made for the campus. Open to possibilities.
                </p>
            </div>
            <div className="w-[1248px] flex items-center pt-[40px]">
                <div className="flex">
                    <span className="w-[40px] h-[4px] bg-brandRed"></span>
                    <span className="w-[40px] h-[4px] bg-brandOrange"></span>
                    <span className="w-[40px] h-[4px] bg-brandGreen"></span>
                    <span className="w-[40px] h-[4px] bg-brandBlue"></span>
                </div>
            </div>
        </div>
    </div>
  );
}