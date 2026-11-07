import landingImage from '../assets/ideas-coming-together.png';
import heroImage from '../assets/GDGoC-UGM-identity.png';
import cardRnD from '../assets/rnd.png';
import cardDnc from '../assets/dnc.png';
import cardDev from '../assets/dev.png';
import cardComS from '../assets/comspark.png';
import iconIg from '../assets/Instagram.png';
import iconYt from '../assets/Youtube.png';
import code2 from '../assets/code2.png';

import { ArrowRight, BookOpen, Code, Users, ChevronDown } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
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
            {/* Bagian Hero Section */}
            <div className="w-[1440px] h-[600px] mx-auto pl-[96px] pr-[64px] pt-[72px] pb-[64px] flex flex-col lg:flex-row items-start justify-between gap-[40px]">

                {/* Bagian Kiri: Teks & Tombol */}
                <div className="max-w-[620px] max-h-[431px] flex flex-col gap-[28px]">
                    <div className="flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            GDGOC UGM • 2026/2027
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[80px] font-extrabold text-gray-900 leading-tight">
                        Big ideas. <br />
                        <span className="text-textBlue">Built together.</span>
                    </h1>

                    <p className="text-brandGrey text-[21px] font-normal font-base leading-relaxed">
                        A place for curious minds at <strong className="text-brandGrey">Universitas Gadjah Mada</strong> to learn, connect, and build technology that matters.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="bg-brandBlue text-white font-base font-medium px-6 py-3 rounded-[8px] shadow-md transition-all flex items-center gap-[16px]">
                            Find your learning track
                            <ArrowRight size={20} />
                        </button>
                        <button className="border border-gray-300 hover:bg-gray-50 text-textBlue font-base font-medium px-6 py-3 rounded-[8px] transition-all flex items-center gap-[16px]">
                            Get to know us
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Footer Kecil di bawah teks */}
                    <div className="flex items-center gap-3 font-base text-xs text-gray-500">
                        <div className="flex items-center -space-x-1.5">
                            <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandRed"></span>
                            <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandOrange"></span>
                            <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandGreen"></span>
                            <span className="w-[16px] h-[16px] border-2 border-brandWhite rounded-full bg-brandBlue"></span>
                        </div>
                        <span>Different backgrounds. A shared curiosity.</span>
                    </div>
                </div>

                {/* Bagian Kanan: Gambar Ilustrasi Hero dari Figma */}
                <div className="max-w-[620px] flex justify-center">
                    <img
                        src={landingImage}
                        alt="Logo"
                        className="w-[620px] h-auto object-cover"
                    />
                </div>

            </div>

            {/* Bagian Baris Tiga Poin Fitur di Bawah */}
            <div className="w-[1440px] mx-auto border-t border-b border-lineGrey pl-[96px] pr-[96px] pt-[26px] pb-[26px]">
                <div className="flex flex-row items-center justify-between text-textBlack font-base text-[18px] font-medium">
                    <div className="flex items-center gap-3">
                        <span className="w-[8px] h-[8px] bg-brandBlue"></span>
                        <span>Learn by doing</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-[8px] h-[8px] bg-brandRed"></span>
                        <span>Connect across disciplines</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-[8px] h-[8px] bg-brandGreen"></span>
                        <span>Build with purpose</span>
                    </div>
                </div>
            </div>

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[88px] pb-[88px] flex flex-col lg:flex-row items-start justify-between gap-[96px]">
                <div className="w-[490px] flex flex-col gap-[20px]">
                    <div className="flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            A CAMPUS. A COMMUNITY.
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        Not just learning <br />
                        tech. <br />
                        Finding your people.
                    </h1>

                    {/* Tombol Aksi */}
                    <div className="flex items-center">
                        <button className=" hover:bg-gray-50 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px]">
                            More about GDGoC UGM
                            <ArrowRight size={20} />
                        </button>
                    </div>

                </div>
                <div className="w-[662px] max-h-[431px] flex flex-col gap-[28px]">

                    <p className="text-brandGrey text-[21px] font-regular font-base leading-relaxed">
                        Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go <span className="font-bold">further</span> when we <span className="font-bold">learn</span> with each other.
                    </p>
                    <p className="text-brandGrey text-[18px] font-regular font-base leading-relaxed">
                        From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.
                    </p>
                    <div className="w-[364px] flex flex-row justify-between gap-[12px]">
                        <button className="bg-brandLightGrey hover:bg-gray-50 text-[13px] text-brandGrey font-base font-bold pt-[8px] pb-[8px] pr-[14px] pl-[14px] rounded-[100px] transition-all flex items-center ">
                            Student-led
                        </button>
                        <button className="bg-brandLightGrey hover:bg-gray-50 text-[13px] text-brandGrey font-base font-bold pt-[8px] pb-[8px] pr-[14px] pl-[14px] rounded-[100px] transition-all flex items-center ">
                            Peer-powered
                        </button>
                        <button className="bg-brandLightGrey hover:bg-gray-50 text-[13px] text-brandGrey font-base font-bold pt-[8px] pb-[8px] pr-[14px] pl-[14px] rounded-[100px] transition-all flex items-center ">
                            Curiosity-first
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[16px] pb-[88px] flex flex-col items-start justify-between gap-[36px]">
                <div className="w-[1248px] flex flex-col gap-[36px]">
                    <div className="w-[800px] flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            FIND YOUR STARTING POINT
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        Many interests. One shared <br />
                        journey. <br />
                    </h1>

                    <div className="w-full flex items-end justify-between">
                        <p className="text-brandGrey text-[18px] font-regular font-base leading-relaxed">
                            Follow what excites you. Explore a track, then connect the dots with others.
                        </p>

                        <a href="#overview" className="inline-flex items-center gap-[12px] text-textBlue text-[16px] font-medium transition-all hover:opacity-80 shrink-0">
                            See the overview
                            <ArrowRight size={20} />
                        </a>
                    </div>

                </div>
                {/* Section Tracks */}
                <div className="w-[1248px] flex flex-col gap-[24px]">
                    <div className="grid grid-cols-3 gap-[24px]">
                        {tracks.map((track, index) => (
                            <div
                                key={index}
                                className="w-[400px] h-[539px] flex flex-col bg-brandWhite border border-lineGrey rounded-[20px] overflow-hidden"
                            >
                                {/* Gambar Asset */}
                                <div className={`w-[400px] h-[232px] ${track.bgColor} relative overflow-visible`}>
                                    <img
                                        src={track.image}
                                        alt={track.title}
                                        className="w-[257px] h-[257px] object-cover absolute left-1/2 -translate-x-1/2 top-[-12px]"
                                    />
                                </div>

                                {/* Teks & Konten */}
                                <div className="w-[400px] p-[28px] flex flex-col  flex-1 gap-[18px]">
                                    <div className="flex flex-col gap-[18px]">
                                        <span className="text-[11px] font-base font-bold tracking-wider text-textBlue uppercase">
                                            {track.category}
                                        </span>
                                        <h3 className="text-[28px] font-base font-bold text-brandDarkGrey leading-snug">
                                            {track.title}
                                        </h3>
                                        <p className="text-[16px] font-base text-brandGrey leading-relaxed">
                                            {track.description}
                                        </p>
                                    </div>

                                    <div className="w-[344px] border-t border-lineGrey flex flex-col gap-[18px]">
                                        <span className="inline-block mt-[18px] text-[13px] font-base text-brandGrey font-regular">
                                            {track.tags}
                                        </span>
                                        <button className="inline-flex items-center gap-2 text-textBlue font-base font-medium text-[16px] hover:opacity-80 transition-opacity w-fit">
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

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[80px] pb-[80px] bg-brandLightGrey flex flex-col items-start justify-between gap-[40px]">
                <div className="w-[1248px] flex flex-col gap-[18px]">
                    <div className="w-[800px] flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            MORE THAN A CLASSROOM
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        Less Watching. More Making.
                    </h1>

                    <p className="text-brandGrey text-[18px] font-regular font-base leading-relaxed">
                        Learn in a way that turns a new concept into something you can actually use.
                    </p>

                </div>
                {/* Section Tracks */}
                <div className="w-[1248px] flex flex-col gap-[24px]">
                    <div className="grid grid-cols-3 gap-[24px]">
                        {program.map((program, index) => (
                            <div
                                key={index}
                                className="w-[400px] h-[291px] flex flex-col bg-white rounded-[24px]"
                            >

                                {/* Teks & Konten */}
                                <div className="w-[400px] p-[28px] flex flex-col  flex-1 gap-[18px]">
                                    <div className="flex flex-col gap-[18px]">
                                        <div className="text-textBlue">
                                            {program.icon}
                                        </div>
                                        <h3 className="text-[28px] font-base font-bold text-brandDarkGrey leading-snug">
                                            {program.title}
                                        </h3>
                                        <p className="text-[16px] font-base text-brandGrey leading-relaxed">
                                            {program.description}
                                        </p>
                                    </div>

                                    <div className="w-[344px] border-t border-lineGrey flex flex-col gap-[18px]">
                                        <button className="inline-flex items-center gap-2 text-textBlue font-base font-medium text-[13px] hover:opacity-80 transition-opacity w-fit mt-[18px]">
                                            {program.link}
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[88px] pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-[64px]">
                <div className="w-[592px]  bg-brandLightYellow rounded-[32px] p-[40px] flex flex-col justify-between relative overflow-hidden gap-[24px]">

                    {/* Header Atas: Label & Ikon Code */} 
                    <div className="flex items-center justify-between w-[512px]">
                        <span className="text-[12px] font-base font-regular tracking-wider text-brandGrey uppercase">
                            IDEA → PROTOTYPE
                        </span>
                        <p className="w-[30px] h-[31px] font-base font-regular text-[24px] text-textBlue">
                            {"</>"}
                        </p>
                    </div>

                    {/* Kontainer Kartu Putih di Dalam */}
                    <div className=" w-[512px] bg-white rounded-[24px] p-[26px] border border-lineGrey flex flex-col gap-[24px]">

                        {/* Indikator Titik Tiga (Merah, Kuning, Hijau) */}
                        <div className="flex items-center gap-[8px]">
                            <span className="w-[10px] h-[10px] rounded-full bg-brandRed"></span>
                            <span className="w-[10px] h-[10px] rounded-full bg-amber-400"></span>
                            <span className="w-[10px] h-[10px] rounded-full bg-brandGreen"></span>
                        </div>

                        {/* Judul Utama */}
                        <h2 className="w-[460px] text-[32px] font-base font-bold text-textBlack leading-tight">
                            A little less friction. <br />
                            A better campus day.
                        </h2>

                        {/* Tombol Tab Pilihan (Discover, Connect, Share) */}
                        <div className="w-[460px] flex items-center gap-[12px]">
                            {/* Tombol 1: Discover */}
                            <div className="w-[145.33px] p-[16px] bg-trackblue rounded-[12px] font-base font-bold text-brandBlack text-[13px] cursor-pointer">
                                Discover
                            </div>

                            {/* Tombol 2: Connect */}
                            <div className="w-[145.33px] p-[16px] bg-trackgreen rounded-[12px] font-base font-bold text-brandBlack text-[13px] cursor-pointer">
                                Connect
                            </div>

                            {/* Tombol 3: Share */}
                            <div className="w-[145.33px] p-[16px] bg-brandLightOrange rounded-[12px] font-base font-bold text-brandBlack text-[13px] cursor-pointer">
                                Share
                            </div>
                        </div>

                        {/* Subteks Keterangan di Bawah */}
                        <p className="text-[16px] font-base text-brandGrey pt-[8px]">
                            Start with a student need. Build a small, useful solution.
                        </p>

                    </div>

                        <span className="text-[11px] font-base font-regular tracking-wider text-brandGrey uppercase">
                            EXAMPLE PROJECT BRIEF · NOT A LAUNCHED PRODUCT
                        </span>

                </div>
                <div className="w-[592px] flex flex-col gap-[28px]">

                    <div className="flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            BUILD SOMETHING THAT MATTERS
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        Your next project could <br />
                        start on campus <br />
                    </h1>
                    <p className="text-brandGrey text-[18px] font-regular font-base leading-relaxed">
                        What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
                    </p>
                    <p className="text-brandGrey text-[16px] font-regular font-base leading-relaxed">
                        Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
                    </p>

                    {/* Tombol Aksi */}
                    <div className="flex items-center">
                        <button className=" hover:bg-gray-50 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px]">
                            Explore project-based learning
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[8px] pb-[88px] bg-brandWhite flex flex-col items-start justify-between gap-[40px]">
                <div className="w-[1248px] flex flex-col gap-[18px]">
                    <div className="w-[800px] flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            MAKE YOUR FIRST MOVE
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        You don't need to have it all <br />
                        figured out
                    </h1>
                </div>
                {/* Section Tracks */}
                <div className="w-[1248px] flex flex-col gap-[40px]">
                    <div className="grid grid-cols-3 gap-[24px]">
                        {participateJ.map((item, index) => (
                            <div
                                key={index}
                                className="w-[400px] h-[291px] flex flex-col bg-white rounded-[24px]"
                            >

                                {/* Teks & Konten */}
                                <div className="w-[390px] flex flex-col  flex-1 gap-[20px]">
                                    <div className="flex flex-col gap-[18px]">
                                        <div className="text-textBlue text-[44px] font-bold font-base">
                                            {item.num}
                                        </div>
                                        <h3 className="text-[25px] font-base font-bold text-brandDarkGrey leading-snug border-t border-lineGrey pt-[20px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] font-base text-brandGrey leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[1440px] h-[262px] mx-auto pl-[96px] pr-[96px] pt-[88px] pb-[88px] bg-trackgreen flex flex-row lg:flex-row items-center justify-between gap-[64px]">
                <div className="w-[100px] flex justify-center">
                    <img
                        src={cardComS}
                        alt="Logo"
                        className="w-[100px] h-[100px] object-cover"
                    />
                </div>
                <div className="w-[1084px] flex flex-col items-start justify-between gap-[16px]">
                    <h1 className="w-[1084px] font-base lg:text-[40px] font-bold  text-textBlack leading-tight">
                        Different majors. Different starting points.<br />
                        A place for all of them.
                    </h1>
                    <p className="w-[1084px] text-brandGrey text-[18px] font-regular font-base leading-relaxed">
                        You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
                    </p>
                </div>
            </div>

            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[80px] pb-[80px] bg-brandWhite flex flex-row items-start justify-between gap-[40px]">
                <div className="w-[400px] flex flex-col gap-[20px]">
                        <div className="w-[800px] flex items-center gap-2">
                        {/* Titik kustom */}
                        <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                        {/* Teks */}
                        <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                            A FEW GOOD QUESTIONS
                        </span>
                    </div>

                    <h1 className="font-base lg:text-[48px] font-bold text-textBlack leading-tight">
                        Wondering <br />
                        where <br />
                        to begin?
                    </h1>

                    <div className="flex items-center">
                        <button className=" hover:bg-gray-50 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px]">
                            Ask us a questions
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                {/* Section Tracks */}
                <div className="w-[752px] flex flex-col gap-[24px]">
                    <div className="grid grid-rows-3 gap-[24px]">
                        {faqAnswers.map((item, index) => (
                            <div
                                key={index}
                                className="w-[752px] flex flex-col"
                            >
                                {/* Teks & Konten */}
                                <div className="w-[752px] flex flex-col  flex-1 gap-[24px]">
                                    <div className="flex flex-col gap-[14px]">
                                        <div className="flex flex-row gap-[24px]">
                                            <p className="w-[704px] text-[20px] font-base font-medium text-brandDarkGrey leading-snug ">
                                                {item.quest}
                                            </p>
                                            <div className="w-[24px] h-[24px] text-textBlue">
                                            {item.icon}
                                        </div>
                                        </div>
                                        <p className="text-[16px] font-base text-brandGrey leading-relaxed border-b border-lineGrey pb-[14px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto pl-[96px] pr-[96px] pt-[64px] pb-[64px] bg-brandWhite flex flex-row items-start justify-between gap-[40px]">
                <div className="w-[1248px]  bg-trackblue rounded-[32px] p-[48px] flex flex-row items-center justify-between relative overflow-hidden gap-[16px]">
                    <div className="w-[844px] flex flex-col gap-[16px]">
                        <div className="w-[800px] flex items-center gap-[10px]">
                            {/* Titik kustom */}
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>

                            {/* Teks */}
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                YOUR NEXT CHAPTER
                            </span>
                        </div>
                            <h2 className="w-[844px] text-[44px] font-base font-bold text-textBlack leading-tight">
                                Bring your curiosity. <br />
                                We'll build from there. 
                            </h2>
                            {/* Subteks Keterangan di Bawah */}
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