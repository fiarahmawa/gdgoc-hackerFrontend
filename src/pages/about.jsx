import heroAbt from '../assets/heroAbt.png';
import diamondAbt from '../assets/diamnd.svg';
import iconIg from '../assets/Instagram.png';
import iconYt from '../assets/Youtube.png';
import heroImage from '../assets/GDGoC-UGM-identity.png';
import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Code, Users, Heart } from 'lucide-react';

    
export default function AboutPage() {

    const [values, setValues] = useState([]);
    const [loadingValues, setLoadingValues] = useState(true);
    const [errorValues, setErrorValues] = useState(null);

    const [roles, setRoles] = useState([]);
    const [loadingRoles, setLoadingRoles] = useState(true);
    const [errorRoles, setErrorRoles] = useState(null);

    const valueIcons = {
        'stay-curious': <BookOpen size={24} className="text-textBlue" />,
        'make-room': <Users size={24} className="text-textBlue" />,
        'learn-by-building': <Code size={24} className="text-textBlue" />,
        'give-something-back': <Heart size={24} className="text-textBlue" />,
    };

    useEffect(() => {
        // Fetch data values
        fetch('https://gdgoc-ugm-api.vercel.app/api/values')
            .then((res) => {
                if (!res.ok) throw new Error('Gagal memuat data values');
                return res.json();
            })
            .then((data) => {
                console.log("Data API Values:", data.data);
                setValues(data.data);
                setLoadingValues(false);
            })
            .catch((err) => {
                setErrorValues(err.message);
                setLoadingValues(false);
            });

        fetch('https://gdgoc-ugm-api.vercel.app/api/roles')
            .then((res) => {
                if (!res.ok) throw new Error('Gagal memuat data roles');
                return res.json();
            })
            .then((data) => {
                console.log("Data API Roles:", data.data);
                setRoles(data.data);
                setLoadingRoles(false);
            })
            .catch((err) => {
                setErrorRoles(err.message);
                setLoadingRoles(false);
            });

        
    }, []);

    if (loadingValues) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center">
                <p className="text-brandGrey text-lg animate-pulse">Memuat data...</p>
            </div>
        );
    }

    if (errorValues) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center text-red-500">
                <p>Terjadi kesalahan: {errorValues}</p>
            </div>
        );
    }

    if (values.length === 0) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center text-brandGrey">
                <p>Belum ada data values yang tersedia.</p>
            </div>
        );
    }

    if (loadingRoles) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center">
                <p className="text-brandGrey text-lg animate-pulse">Memuat data...</p>
            </div>
        );
    }

    if (errorRoles) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center text-red-500">
                <p>Terjadi kesalahan: {errorRoles}</p>
            </div>
        );
    }

    if (roles.length === 0) {
        return (
            <div className="w-[1440px] mx-auto py-20 text-center text-brandGrey">
                <p>Belum ada data roles yang tersedia.</p>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <div className="w-[1440px] h-[600px] mx-auto pl-[96px] pr-[96px] pt-[80px] pb-[80px] flex flex-col lg:flex-row items-center justify-between gap-[64px]">

                <div className="max-w-[720px] flex flex-col gap-[26px]">
                    <div className="flex items-center gap-2">
                        
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            ABOUT GDGOC UGM 
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[72px] font-extrabold text-brandDarkGrey leading-tight">
                        Built by students.<br />
                        <span className="text-textBlue">For what's next.</span>
                    </h1>

                    <p className="text-brandGrey text-[22px] font-normal font-base">
                        We're a community of learners and makers at Universitas Gadjah Mada,
                         connected by curiosity and the belief that technology can do good.
                    </p>

                    <div className="flex items-center font-base text-[13px] text-brandGrey">
                        <span>UNIVERSITAS GADJAH MADA • 2026/2027</span>
                    </div>
                </div>

                <div className="max-w-[464px] flex justify-center">
                    <img
                        src={heroAbt}
                        alt="Logo"
                        className="w-[464px] h-[400] object-cover"
                    />
                </div>

            </div>

            {/* Purpose Section */}
            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[80px] pb-[80px] bg-brandLightGrey flex flex-row lg:flex-row items-center justify-between gap-[96px]">
                <div className="w-[1248px] flex flex-row items-start justify-between gap-[16px]">
                    
                    <div className="w-[400px] flex flex-col items-start justify-between gap-[20px]">
                        <div className="flex items-center gap-2">
                            
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                WHY WE COME TOGETHER
                            </span>
                        </div>
                        <h1 className="w-[400px] font-base text-[48px] font-bold  text-textBlack leading-tight">
                            A bridge from <br />
                            <span className="text-textBlue ">“I wonder” to.</span> <br />
                            <span className="text-gradientblue ">“I made this.”</span>
                        </h1>
                    </div>
                    <div className="w-[752px] flex flex-col items-center justify-between gap-[24px]">
                        
                        <p className="w-[752px] text-brandDarkGrey text-[24px] font-regular font-base  ">
                            Learning feels different when there's someone to exchange ideas with, a problem you care about, and the space to give it a try.
                        </p>
                        <p className="w-[752px] text-brandGrey text-[18px] font-regular font-base  ">
                            That's the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
                        </p>
                        <p className="w-[752px] text-brandGrey text-[18px] font-regular font-base  ">
                            Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section  */}
            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[80px] pb-[80px] bg-brandWhite flex flex-col items-start justify-between gap-[40px]">
                <div className="w-[1248px] flex flex-col gap-[18px]">
                    <div className="w-[800px] flex items-center gap-2">
                        
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            WHAT GUIDES US
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight ">
                        Good technology starts with good <br />
                        company.
                    </h1>

                </div>
                
                <div className="w-[1248px] flex flex-col gap-[24px]">
                    <div className="grid grid-cols-4 gap-[24px]">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="w-[294px] flex flex-col bg-white border border-lineGrey rounded-[24px]"
                            >
                                <div className="w-[294px] p-[26px] flex flex-col  flex-1 gap-[22px]">
                                    <div 
                                        className="w-[32px] h-[4px] rounded-full "
                                        style={{ backgroundColor: value.color || '#193F92' }}
                                    ></div>
                                    <div className="text-textBlue">
                                        {valueIcons[value.id] || <BookOpen size={24} className="text-textBlue" />}
                                    </div>
                                    <h3 className="text-[24px] font-base font-bold text-brandDarkGrey  ">
                                        {value.title}
                                    </h3>
                                    <p className="text-[16px] font-base text-brandGrey  ">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ways to belong Section */}
            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pb-[80px] bg-brandWhite flex flex-row items-start justify-between gap-[40px]">
                <div className="w-[400px] flex flex-col gap-[20px]">
                        <div className="w-[800px] flex items-center gap-2">
                        
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                           PEOPLE, NOT LABELS
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        There's more <br />
                         than one way to <br />
                         contribute.
                    </h1>

                    <p className="text-[18px] font-base text-brandGrey  ">
                        You can be learning one day and helping someone else the next. A community grows through both.
                    </p>
                </div>
                
                <div className="w-[752px] flex flex-col gap-[24px]">
                    <div className="grid grid-rows-3 gap-[24px]">
                        {roles.map((item, index) => (
                            <div
                                key={index}
                                className="w-[752px] flex flex-col"
                            >
                                <div className="w-[752px] flex flex-col  flex-1 gap-[24px]">
                                    <div className="flex flex-col gap-[14px]">
                                        <div className="flex flex-row gap-[24px]">
                                            <p className="text-[28px] font-base font-bold text-brandDarkGrey ">
                                                {item.title}
                                            </p>
                                            
                                        </div>
                                        <p className="text-[16px] font-base text-brandGrey   border-b border-lineGrey pb-[14px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <button className=" hover:bg-gray-50 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px]">
                            Let's talk about getting involved
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[1440px] h-[262px] mx-auto pl-[96px] pr-[96px] pt-[56px] pb-[56px] bg-trackorange flex flex-row lg:flex-row items-center justify-between gap-[64px]">
                <div className="w-[72px] flex justify-center">
                    <img
                        src={diamondAbt}
                        alt="diamond"
                        className="w-[72px] h-[72px] object-cover"
                    />
                </div>
                <div className="w-[1112px] flex flex-col items-start justify-between gap-[14px]">
                    <h1 className=" font-base lg:text-[40px] font-bold  text-textBlack">
                        A space to learn. A responsibility to care.
                    </h1>
                    <p className=" text-brandGrey text-[18px] font-regular font-base">
                        We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
                    </p>
                </div>
            </div>

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[64px] pb-[64px] bg-brandWhite flex flex-row items-start justify-between gap-[40px]">
                <div className="w-[1248px]  bg-trackblue rounded-[32px] p-[48px] flex flex-row items-center justify-between relative overflow-hidden gap-[16px]">
                    <div className="w-[844px] flex flex-col gap-[16px]">
                        <div className="w-[800px] flex items-center gap-[10px]">
                            
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                YOUR NEXT CHAPTER
                            </span>
                        </div>
                            <h2 className="w-[844px] text-[44px] font-base font-bold text-textBlack  ">
                                Bring your curiosity. <br />
                                We'll build from there. 
                            </h2>
                            
                            <p className="w-[844px] text-[16px] font-base text-brandGrey pt-[8px]">
                                Start with a student need. Build a small, useful solution.
                            </p>
                    </div>
                    <div className="w-[260px] flex flex-col gap-[16px]">
                        <button className="w-[241px] bg-brandBlue text-white font-base font-medium px-6 py-3 rounded-[8px] shadow-md transition-all flex items-center gap-[16px]">
                            Explore the overview
                            <ArrowRight size={20} />
                        </button>
                        <button className="w-[198px] text-textBlue font-base font-medium rounded-[8px] flex items-center gap-[12px]">
                            Talk to the community
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

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
           
        </>
    );
}