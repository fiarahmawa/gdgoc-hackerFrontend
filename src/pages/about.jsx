import heroAbt from '../assets/heroAbt.png';
import diamondAbt from '../assets/diamnd.svg'; 
import { BookOpen, Users, Code, Heart, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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
                setRoles(data.data);
                setLoadingRoles(false);
            })
            .catch((err) => {
                setErrorRoles(err.message);
                setLoadingRoles(false);
            });
    }, []);

    if (loadingValues || loadingRoles) {
        return (
            <div className="w-full max-w-[1440px] mx-auto py-20 text-center px-6">
                <p className="text-brandGrey text-lg animate-pulse">Memuat data...</p>
            </div>
        );
    }

    if (errorValues || errorRoles) {
        return (
            <div className="w-full max-w-[1440px] mx-auto py-20 text-center text-red-500 px-6">
                <p>Terjadi kesalahan: {errorValues || errorRoles}</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden bg-brandWhite">
            
            {/* Hero div */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[80px] flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[64px]">
                    <div className="w-full lg:max-w-[720px] flex flex-col gap-[24px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                ABOUT GDGOC UGM 
                            </span>
                        </div>

                        <h1 className="font-base text-[40px] md:text-[60px] lg:text-[72px] font-extrabold text-brandDarkGrey leading-tight">
                            Built by students.<br />
                            <span className="text-textBlue">For what's next.</span>
                        </h1>

                        <p className="text-brandGrey text-[18px] md:text-[22px] font-normal font-base">
                            We're a community of learners and makers at Universitas Gadjah Mada,
                            connected by curiosity and the belief that technology can do good.
                        </p>

                        <div className="flex items-center font-base text-[13px] text-brandGrey pt-2">
                            <span>UNIVERSITAS GADJAH MADA • 2026/2027</span>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[464px] flex justify-center shrink-0">
                        <img
                            src={heroAbt}
                            alt="Logo"
                            className="w-full max-w-[464px] h-[300px] md:h-[400px] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Purpose div */}
            <div className="w-full bg-brandLightGrey">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[80px] flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[96px]">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[32px] lg:gap-[64px]">
                        
                        <div className="w-full lg:w-[400px] flex flex-col items-start gap-[20px] shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                                <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                    WHY WE COME TOGETHER
                                </span>
                            </div>
                            <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                                A bridge from <br />
                                <span className="text-textBlue">“I wonder” to.</span> <br />
                                <span className="text-gradientblue">“I made this.”</span>
                            </h2>
                        </div>

                        <div className="w-full lg:w-[752px] flex flex-col items-start justify-between gap-[24px]">
                            <p className="text-brandDarkGrey text-[20px] md:text-[24px] font-normal font-base leading-snug">
                                Learning feels different when there's someone to exchange ideas with, a problem you care about, and the space to give it a try.
                            </p>
                            <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                                That's the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
                            </p>
                            <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                                Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Values div */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[80px] flex flex-col items-start justify-between gap-[40px]">
                    <div className="w-full flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                WHAT GUIDES US
                            </span>
                        </div>
                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Good technology starts with good <br className="hidden sm:inline" />
                            company.
                        </h2>
                    </div>
                    
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col bg-white border border-lineGrey rounded-[24px]"
                                >
                                    <div className="p-[26px] flex flex-col flex-1 gap-[22px]">
                                        <div 
                                            className="w-[32px] h-[4px] rounded-full"
                                            style={{ backgroundColor: value.color || '#193F92' }}
                                        ></div>
                                        <div className="text-textBlue">
                                            {valueIcons[value.id] || <BookOpen size={24} className="text-textBlue" />}
                                        </div>
                                        <h3 className="text-[22px] md:text-[24px] font-base font-bold text-brandDarkGrey">
                                            {value.title}
                                        </h3>
                                        <p className="text-[15px] md:text-[16px] font-base text-brandGrey leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Ways to belong div */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] pb-[80px] flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[64px]">
                    
                    <div className="w-full lg:w-[400px] flex flex-col gap-[20px] shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                PEOPLE, NOT LABELS
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            There's more <br />
                            than one way to <br />
                            contribute.
                        </h2>

                        <p className="text-[16px] md:text-[18px] font-base text-brandGrey leading-relaxed">
                            You can be learning one day and helping someone else the next. A community grows through both.
                        </p>
                    </div>
                    
                    <div className="w-full lg:w-[752px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[24px]">
                            {roles.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col"
                                >
                                    <div className="flex flex-col flex-1 gap-[14px]">
                                        <div className="flex flex-col gap-[14px]">
                                            <h3 className="text-[24px] md:text-[28px] font-base font-bold text-brandDarkGrey">
                                                {item.title}
                                            </h3>
                                            <p className="text-[15px] md:text-[16px] font-base text-brandGrey border-b border-lineGrey pb-[20px] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="pt-2">
                                <button className="hover:opacity-80 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px] w-fit">
                                    Let's talk about getting involved
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Banner Diamond / Responsibility Section */}
            <div className="w-full bg-trackorange">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[40px] md:py-[56px] flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-[64px]">
                    <div className="w-[72px] h-[72px] flex justify-center shrink-0">
                        <img
                            src={diamondAbt}
                            alt="diamond"
                            className="w-[72px] h-[72px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-[1112px] flex flex-col items-start justify-between gap-[14px] text-center md:text-left">
                        <h2 className="font-base text-[28px] md:text-[30px] lg:text-[32px] font-bold text-textBlack leading-tight">
                            A space to learn. A responsibility to care.
                        </h2>
                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
                        </p>
                    </div>
                </div>
            </div>

            {/* Next Chapter Card Section */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[64px]">
                    <div className="w-full bg-trackblue rounded-[32px] p-8 md:p-[48px] flex flex-col lg:flex-row items-start lg:items-center justify-between relative overflow-hidden gap-[32px]">
                        <div className="w-full lg:max-w-[844px] flex flex-col gap-[16px]">
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                                <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                    YOUR NEXT CHAPTER
                                </span>
                            </div>
                            <h2 className="text-[32px] md:text-[44px] font-base font-bold text-textBlack leading-tight">
                                Bring your curiosity. <br />
                                We'll build from there. 
                            </h2>
                            <p className="text-[16px] font-base text-brandGrey pt-[8px]">
                                Start with a student need. Build a small, useful solution.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-[16px] w-full sm:w-auto shrink-0">
                            <button className="w-full sm:w-[241px] bg-brandBlue text-white font-base font-medium px-6 py-3 rounded-[8px] shadow-md transition-all flex items-center justify-center sm:justify-start gap-[16px] hover:opacity-90">
                                Explore the overview
                                <ArrowRight size={20} />
                            </button>
                            <button className="w-full sm:w-[198px] text-textBlue font-base font-medium py-2 rounded-[8px] flex items-center justify-center sm:justify-start gap-[12px] hover:opacity-80">
                                Talk to the community
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}