import landingImage from '../assets/ideas-coming-together.png';
import cardRnD from '../assets/rnd.png';
import cardDnc from '../assets/dnc.png';
import cardDev from '../assets/dev.png';
import cardComS from '../assets/comspark.png';

import { ArrowRight, BookOpen, Code, Users, ChevronDown } from 'lucide-react';
export default function LandingPage() {
    const tracks = [
        {
            category: 'EXPLORE THE WHY',
            title: 'Research & discovery',
            description: 'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
            tags: 'Problem framing · User research · Product thinking',
            image: cardRnD,
            bgColor: 'bg-trackblue',
        },
        {
            category: 'MAKE IT MEANINGFUL',
            title: 'Design & creativity',
            description: 'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
            tags: 'UI/UX · Visual storytelling · Prototyping',
            image: cardDnc,
            bgColor: 'bg-trackorange',
        },
        {
            category: 'BRING IDEAS TO LIFE',
            title: 'Development',
            description: 'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
            tags: 'Web & mobile · Cloud · AI foundations',
            image: cardDev,
            bgColor: 'bg-trackgreen',
        },
    ];
    const program = [
        {
            icon: <BookOpen size={20} className="text-textBlue" />,
            title: 'Study together',
            description: 'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.',
            link: 'Study groups & guided practice',
        },
        {
            icon: <Code size={20} className="text-textBlue" />,
            title: 'Try it hands on',
            description: 'Explore a tool or technique in a workshop, then put it to work in a small experiment.',
            link: 'Workshops & technical sessions',
        },
        {
            icon: <Users size={20} className="text-textBlue" />,
            title: 'Share the process',
            description: 'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
            link: 'Project circles & sharing sessions',
        },
    ];
    const participateJ = [
        {
            num: '01',
            title: 'Follow your curiosity',
            description: 'Explore the tracks and find a topic you want to understand better.',
        },
        {
            num: '02',
            title: 'Learn alongside others',
            description: 'Join a learning opportunity, ask a question, and share your perspective.',
        },
        {
            num: '03',
            title: 'Turn learning into action',
            description: 'Practice through a project, exchange feedback, and pass something on.',
        },
    ];
    const faqAnswers = [
        {
            quest: 'Do I need to know how to code?',
            icon: <ChevronDown size={24} className="text-textBlue" />,
            desc: 'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.',
        },
        {
            quest: 'How do I get started?',
            icon: <ChevronDown size={24} className="text-textBlue" />,
            desc: 'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.',
        },
        {
            quest: 'How can I find learning opportunities?',
            icon: <ChevronDown size={24} className="text-textBlue" />,
            desc: 'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] pt-[40px] md:pt-[72px] pb-[40px] md:pb-[64px] flex flex-col lg:flex-row items-center justify-between gap-[40px]">

                    <div className="w-full lg:max-w-[620px] flex flex-col gap-[28px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                GDGOC UGM • 2026/2027
                            </span>
                        </div>

                        <h1 className="font-base text-[40px] md:text-[60px] lg:text-[80px] font-extrabold text-gray-900 leading-tight">
                            Big ideas. <br />
                            <span className="text-textBlue">Built together.</span>
                        </h1>

                        <p className="text-brandGrey text-[18px] md:text-[21px] font-normal font-base leading-relaxed">
                            A place for curious minds at <strong className="text-brandGrey">Universitas Gadjah Mada</strong> to learn, connect, and build technology that matters.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button className="bg-brandBlue text-white font-base font-medium px-6 py-3 rounded-[8px] shadow-md transition-all flex items-center justify-center gap-[16px] hover:opacity-90">
                                Find your learning track
                                <ArrowRight size={20} />
                            </button>
                            <button className="border border-gray-300 hover:bg-gray-50 text-textBlue font-base font-medium px-6 py-3 rounded-[8px] transition-all flex items-center justify-center gap-[16px]">
                                Get to know us
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-3 font-base text-xs text-gray-500">
                            <div className="flex items-center -space-x-1.5 shrink-0">
                                <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandRed"></span>
                                <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandOrange"></span>
                                <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandGreen"></span>
                                <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandBlue"></span>
                            </div>
                            <span>Different backgrounds. A shared curiosity.</span>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[620px] flex justify-center shrink-0">
                        <img
                            src={landingImage}
                            alt="Logo"
                            className="w-full max-w-[620px] h-auto object-cover rounded-2xl"
                        />
                    </div>

                </div>
            </div>

            {/* Sub-navigation Bar */}
            <div className="w-full bg-brandWhite border-t border-b border-lineGrey">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[20px] md:py-[26px] overflow-x-auto">
                    <div className="flex flex-row items-center justify-between text-textBlack font-base text-[16px] md:text-[18px] font-medium min-w-max gap-8">
                        <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] bg-brandBlue shrink-0"></span>
                            <span>Learn by doing</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] bg-brandRed shrink-0"></span>
                            <span>Connect across disciplines</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] bg-brandGreen shrink-0"></span>
                            <span>Build with purpose</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Comm Introduction */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[88px] flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[96px]">
                    
                    <div className="w-full lg:w-[490px] flex flex-col gap-[20px] shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                A CAMPUS. A COMMUNITY.
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Not just learning <br />
                            tech. <br />
                            Finding your people.
                        </h2>

                        <div className="flex items-center">
                            <button className="hover:opacity-80 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px] w-fit">
                                More about GDGoC UGM
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-[662px] flex flex-col gap-[28px]">
                        <p className="text-brandGrey text-[18px] md:text-[21px] font-normal font-base leading-relaxed">
                            Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go <span className="font-bold">further</span> when we <span className="font-bold">learn</span> with each other.
                        </p>
                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.
                        </p>
                        <div className="w-full max-w-[364px] flex flex-wrap gap-[12px]">
                            <span className="bg-brandLightGrey text-[13px] text-brandGrey font-base font-bold py-[8px] px-[14px] rounded-[100px] inline-flex items-center">
                                Student-led
                            </span>
                            <span className="bg-brandLightGrey text-[13px] text-brandGrey font-base font-bold py-[8px] px-[14px] rounded-[100px] inline-flex items-center">
                                Peer-powered
                            </span>
                            <span className="bg-brandLightGrey text-[13px] text-brandGrey font-base font-bold py-[8px] px-[14px] rounded-[100px] inline-flex items-center">
                                Curiosity-first
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section Track Discover */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] pt-[16px] pb-[60px] md:pb-[88px] flex flex-col items-start justify-between gap-[36px]">
                    
                    <div className="w-full flex flex-col gap-[24px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                FIND YOUR STARTING POINT
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Many interests. One shared journey.
                        </h2>

                        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                            <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed max-w-[600px]">
                                Follow what excites you. Explore a track, then connect the dots with others.
                            </p>
                            <a href="#overview" className="inline-flex items-center gap-[12px] text-textBlue text-[16px] font-medium transition-all hover:opacity-80 shrink-0">
                                See the overview
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                            {tracks.map((track, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col bg-brandWhite border border-lineGrey rounded-[20px] overflow-hidden"
                                >
                                    <div className={`w-full h-[232px] ${track.bgColor} relative overflow-hidden`}>
                                        <img
                                            src={track.image}
                                            alt={track.title}
                                            className="w-[257px] h-[257px] object-cover absolute left-1/2 -translate-x-1/2 top-[-12px]"
                                        />
                                    </div>

                                    <div className="p-[28px] flex flex-col flex-1 justify-between gap-[18px]">
                                        <div className="flex flex-col gap-[18px]">
                                            <span className="text-[11px] font-base font-bold tracking-wider text-textBlue uppercase">
                                                {track.category}
                                            </span>
                                            <h3 className="text-[24px] md:text-[28px] font-base font-bold text-brandDarkGrey leading-tight">
                                                {track.title}
                                            </h3>
                                            <p className="text-[15px] md:text-[16px] font-base text-brandGrey leading-normal">
                                                {track.description}
                                            </p>
                                        </div>

                                        <div className="pt-[18px] border-t border-lineGrey flex flex-col gap-[18px]">
                                            <span className="text-[13px] font-base text-brandGrey font-normal">
                                                {track.tags}
                                            </span>
                                            <button className="inline-flex items-center gap-[8px] text-textBlue font-base font-medium text-[16px] hover:opacity-80 transition-opacity w-fit">
                                                Explore this track
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Section Learn Formats */}
            <div className="w-full bg-brandLightGrey">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[80px] flex flex-col items-start justify-between gap-[40px]">
                    
                    <div className="w-full flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                MORE THAN A CLASSROOM
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Less Watching. More Making.
                        </h2>

                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            Learn in a way that turns a new concept into something you can actually use.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                            {program.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col bg-white rounded-[24px] p-[28px] justify-between shadow-sm"
                                >
                                    <div className="flex flex-col gap-[18px]">
                                        <div className="text-textBlue">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-[24px] md:text-[28px] font-base font-bold text-brandDarkGrey leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[15px] md:text-[16px] font-base text-brandGrey leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="w-full border-t border-lineGrey flex flex-col mt-[24px] pt-[16px]">
                                        <button className="inline-flex items-center gap-2 text-textBlue font-base font-medium text-[13px] hover:opacity-80 transition-opacity w-fit">
                                            {item.link}
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Section Project */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[88px] flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[64px]">
                    
                    {/* Visual Card Kiri */}
                    <div className="w-full lg:w-[592px] bg-brandLightYellow rounded-[32px] p-6 md:p-[40px] flex flex-col justify-between relative overflow-hidden gap-[24px]">

                        <div className="flex items-center justify-between w-full">
                            <span className="text-[12px] font-base font-normal tracking-wider text-brandGrey uppercase">
                                IDEA → PROTOTYPE
                            </span>
                            <p className="font-base font-normal text-[24px] text-textBlue">
                                {"</>"}
                            </p>
                        </div>

                        <div className="w-full bg-white rounded-[24px] p-5 md:p-[26px] border border-lineGrey flex flex-col gap-[24px]">

                            {/* Indikator Titik Tiga */}
                            <div className="flex items-center gap-[8px]">
                                <span className="w-[10px] h-[10px] rounded-full bg-brandRed"></span>
                                <span className="w-[10px] h-[10px] rounded-full bg-amber-400"></span>
                                <span className="w-[10px] h-[10px] rounded-full bg-brandGreen"></span>
                            </div>

                            <h3 className="w-full text-[24px] md:text-[32px] font-base font-bold text-textBlack leading-tight">
                                A little less friction. <br />
                                A better campus day.
                            </h3>

                            <div className="w-full flex flex-row items-center gap-[8px] md:gap-[12px]">
                                {/* Discover */}
                                <div className="flex-1 p-[12px] md:p-[16px] bg-trackblue rounded-[12px] font-base font-bold text-brandBlack text-[12px] md:text-[13px] text-center cursor-pointer">
                                    Discover
                                </div>

                                {/* Connect */}
                                <div className="flex-1 p-[12px] md:p-[16px] bg-trackgreen rounded-[12px] font-base font-bold text-brandBlack text-[12px] md:text-[13px] text-center cursor-pointer">
                                    Connect
                                </div>

                                {/* Share */}
                                <div className="flex-1 p-[12px] md:p-[16px] bg-brandLightOrange rounded-[12px] font-base font-bold text-brandBlack text-[12px] md:text-[13px] text-center cursor-pointer">
                                    Share
                                </div>
                            </div>

                            <p className="text-[14px] md:text-[16px] font-base text-brandGrey pt-[8px]">
                                Start with a student need. Build a small, useful solution.
                            </p>

                        </div>

                        <span className="text-[11px] font-base font-normal tracking-wider text-brandGrey uppercase">
                            EXAMPLE PROJECT BRIEF · NOT A LAUNCHED PRODUCT
                        </span>

                    </div>

                    {/* Teks Kanan */}
                    <div className="w-full lg:w-[592px] flex flex-col gap-[28px]">

                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                BUILD SOMETHING THAT MATTERS
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Your next project could <br />
                            start on campus
                        </h2>
                        
                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
                        </p>
                        <p className="text-brandGrey text-[15px] md:text-[16px] font-normal font-base leading-relaxed">
                            Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
                        </p>

                        <div className="flex items-center pt-2">
                            <button className="hover:opacity-80 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px] w-fit">
                                Explore project-based learning
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section Get Started */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] pt-[8px] pb-[60px] md:pb-[88px] flex flex-col items-start justify-between gap-[40px]">
                    
                    <div className="w-full max-w-[800px] flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                MAKE YOUR FIRST MOVE
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            You don't need to have it all <br />
                            figured out
                        </h2>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                            {participateJ.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col bg-white rounded-[24px] p-6 border border-lineGrey/50 shadow-sm"
                                >
                                    <div className="w-full flex flex-col flex-1 gap-[20px]">
                                        <div className="flex flex-col gap-[18px]">
                                            <div className="text-textBlue text-[36px] md:text-[44px] font-bold font-base">
                                                {item.num}
                                            </div>
                                            <h3 className="text-[22px] md:text-[25px] font-base font-bold text-brandDarkGrey leading-snug border-t border-lineGrey pt-[20px]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[15px] md:text-[16px] font-base text-brandGrey leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Banner Hijau / Different Majors */}
            <div className="w-full bg-trackgreen">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[40px] md:py-[88px] flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-[64px]">
                    <div className="w-[100px] h-[100px] flex justify-center shrink-0">
                        <img
                            src={cardComS}
                            alt="Logo"
                            className="w-[100px] h-[100px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-[1084px] flex flex-col items-start justify-between gap-[16px] text-center md:text-left">
                        <h2 className="font-base text-[28px] md:text-[36px] lg:text-[40px] font-bold text-textBlack leading-tight">
                            Different majors. Different starting points.<br />
                            A place for all of them.
                        </h2>
                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section FAQ */}
            <div className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[60px] md:py-[80px] flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[64px]">
                    
                    {/* FAQ Kiri */}
                    <div className="w-full lg:w-[400px] flex flex-col gap-[20px] shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                A FEW GOOD QUESTIONS
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Wondering <br />
                            where <br />
                            to begin?
                        </h2>

                        <div className="flex items-center">
                            <button className="hover:opacity-80 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px] w-fit">
                                Ask us a question
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                    
                    {/* FAQ Kanan (List Pertanyaan) */}
                    <div className="w-full lg:w-[752px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[24px]">
                            {faqAnswers.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col"
                                >
                                    <div className="flex flex-col flex-1 gap-[14px]">
                                        <div className="flex flex-col gap-[14px]">
                                            <div className="flex flex-row items-start justify-between gap-[16px]">
                                                <h3 className="text-[18px] md:text-[20px] font-base font-medium text-brandDarkGrey leading-snug">
                                                    {item.quest}
                                                </h3>
                                                <div className="w-[24px] h-[24px] text-textBlue shrink-0 pt-1">
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <p className="text-[15px] md:text-[16px] font-base text-brandGrey leading-relaxed border-b border-lineGrey pb-[20px]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Banner Card Akhir / Next Chapter */}
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

        </>
    );

}