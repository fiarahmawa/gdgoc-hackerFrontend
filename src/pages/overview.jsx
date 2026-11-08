import cardRnD from '../assets/rnd.png';
import cardDnc from '../assets/dnc.png';
import cardDev from '../assets/dev.png';
import hustlerImg from '../assets/about.png';
import studyImg from '../assets/studyImg.png';
import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Code, Users, ArrowDown } from 'lucide-react';
    
export default function OverviewPage() {

    const [journey, setJourney] = useState([]);
    const [loadingJourney, setLoadingJourney] = useState(true);
    const [errorJourney, setErrorJourney] = useState(null);
    
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

    const formats = [
        {
            icon: <BookOpen size={24} className="text-textBlue" />,
            name: 'Study groups',
            description: 'Build foundations with peers. Work through a topic, compare approaches, and make space for questions.',
            tags: 'Best for • Learning the fundamentals',
            bgColor: 'bg-trackblue',
        },
        {
            icon: <Code size={24} className="text-textBlue" />,
            name: 'Hands-on workshops',
            description: 'Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.',
            tags: 'Best for • Trying something new',
            bgColor: 'bg-trackgreen',
        },
        {
            icon: <Users size={24} className="text-textBlue" />,
            name: 'Project circles',
            description: 'Connect research, design, and development around a shared problem. Learn through making and feedback.',
            tags: 'Best for • Putting skills into practice',
            bgColor: 'bg-brandLightYellow',
        },
        {
            icon: <img src={studyImg} alt="Knowledge sharing" className="w-[24px] h-[24px] object-cover" />,
            name: 'Knowledge sharing',
            description: 'Walk through an idea, share a lesson from your process, and discover how other students approach their work.',
            tags: 'Best for • Exchanging perspectives',
            bgColor: 'bg-brandLightOrange',
        },
    ];

    useEffect(() => {
        fetch('https://gdgoc-ugm-api.vercel.app/api/journey')
            .then((res) => {
                if (!res.ok) throw new Error('Gagal memuat data roles');
                return res.json();
            })
            .then((data) => {
                setJourney(data.data);
                setLoadingJourney(false);
            })
            .catch((err) => {
                setErrorJourney(err.message);
                setLoadingJourney(false);
            });
    }, []);

    if (loadingJourney) {
        return (
            <div className="w-full max-w-[1440px] mx-auto py-20 text-center px-6">
                <p className="text-brandGrey text-lg animate-pulse">Memuat data...</p>
            </div>
        );
    }

    if (errorJourney) {
        return (
            <div className="w-full max-w-[1440px] mx-auto py-20 text-center text-red-500 px-6">
                <p>Terjadi kesalahan: {errorJourney}</p>
            </div>
        );
    }

    if (journey.length === 0) {
        return (
            <div className="w-full max-w-[1440px] mx-auto py-20 text-center text-brandGrey px-6">
                <p>Belum ada data journey yang tersedia.</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden bg-brandWhite">
            
            {/* Hero Section */}
            <section className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[80px] flex flex-col lg:flex-row justify-between items-center gap-[64px]">
                    <div className="max-w-[920px] flex flex-col gap-[24px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                Overview • Programs & learning tracks
                            </span>
                        </div>

                        <h1 className="font-base text-[40px] md:text-[60px] lg:text-[72px] font-extrabold text-brandDarkGrey leading-tight">
                            Find your spark.<br />
                            <span className="text-textBlue">Build your own path.</span>
                        </h1>

                        <p className="text-brandGrey text-[18px] md:text-[21px] font-normal font-base">
                            Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
                        </p>
                    </div>

                    <div className="w-[264px] flex flex-col justify-center items-center overflow-hidden shrink-0">
                        <img
                            src={hustlerImg}
                            alt="Logo"
                            className="w-[264px] h-[286px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section Learn Track Sub-nav */}
            <section className="w-full border-t border-b border-lineGrey bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[26px] overflow-x-auto">
                    <div className="flex flex-row justify-start text-brandGrey font-base text-[15px] gap-[45px] min-w-max">
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <span className="text-textBlue font-bold">Learning tracks</span>
                            <ArrowDown size={16} className="text-textBlue" />
                        </div>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <span>Learning formats</span>
                            <ArrowDown size={16} className="text-textBlue" />
                        </div>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <span>Your learning journey</span>
                            <ArrowDown size={16} className="text-textBlue" />
                        </div>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <span>Find a starting point</span>
                            <ArrowDown size={16} className="text-textBlue" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Tracks Grid */}
            <section className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[80px] flex flex-col items-start justify-between gap-[36px]">
                    <div className="max-w-[800px] flex flex-col gap-[18px]">
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                explore your interests
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            Three ways in. Plenty of ways forward.
                        </h2>

                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
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
                                        <p className="text-[16px] font-base text-brandGrey leading-normal">
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
            </section>

            {/* Ways to belong Section (Table) */}
            <section className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] pb-[80px] flex flex-col items-start gap-[32px]">
                    <div className="w-full">
                        <h2 className="font-base text-[28px] md:text-[36px] font-bold text-textBlack leading-tight">
                            From an interest to something you can show.
                        </h2>
                    </div>

                    <div className="w-full border border-lineGrey rounded-[20px] overflow-hidden bg-brandWhite">
                        <div className="overflow-x-auto w-full">
                            <table className="w-full min-w-[750px] border-collapse text-left">
                                <thead>
                                    <tr className="bg-brandLightGrey border-b border-lineGrey text-brandGrey font-base text-[12px] font-medium tracking-wider">
                                        <th className="py-[20px] px-[28px] w-[25%]">Pathway</th>
                                        <th className="py-[20px] px-[28px] w-[40%]">What you can practice</th>
                                        <th className="py-[20px] px-[28px] w-[35%]">A possible outcome</th>
                                    </tr>
                                </thead>
                                <tbody className="text-brandDarkGrey font-base text-[16px] divide-y divide-lineGrey">
                                    <tr>
                                        <td className="py-[20px] px-[28px] text-[18px] font-bold text-brandDarkGrey">
                                            Research & discovery
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            Listening, problem framing, and testing assumptions
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            A research insight and a focused problem brief
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-[20px] px-[28px] text-[18px] font-bold text-brandDarkGrey">
                                            Design & creativity
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            Ideation, user flows, and prototype feedback
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            An interactive prototype and a design story
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-[20px] px-[28px] text-[18px] font-bold text-brandDarkGrey">
                                            Development
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            Coding, testing, and connecting tools
                                        </td>
                                        <td className="py-[20px] px-[28px] text-brandGrey">
                                            A working demo with a clear explanation
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="font-base text-[13px] text-brandGrey">
                        Illustrative learning outcomes. Topics and opportunities are shared through community updates.
                    </p>
                </div>
            </section>

            {/* Section Program Formats */}
            <section className="w-full bg-brandLightGrey">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[80px] flex flex-col items-start justify-between gap-[40px]">
                    <div className="max-w-[800px] flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                Ways to learn
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            The format changes. The curiosity stays.
                        </h2>

                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            Explore the kinds of experiences that help you move from understanding to doing.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                        {formats.map((program, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col bg-white rounded-[24px] p-[28px] shadow-sm"
                            >
                                <div className="flex flex-col sm:flex-row gap-[24px]">
                                    <div className={`w-[52px] h-[52px] min-w-[52px] min-h-[52px] shrink-0 rounded-[12px] flex items-center justify-center ${program.bgColor}`}>
                                        <div className="w-[24px] h-[24px] flex items-center justify-center text-textBlue">
                                            {program.icon}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[14px]">
                                        <h3 className="text-[24px] md:text-[28px] font-base font-bold text-brandDarkGrey leading-snug">
                                            {program.name}
                                        </h3>
                                        <p className="text-[16px] font-base text-brandGrey leading-relaxed">
                                            {program.description}
                                        </p>
                                        <p className="text-[13px] font-base text-textBlue leading-relaxed">
                                            {program.tags}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Learn Journey */}
            <section className="w-full bg-brandWhite">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[80px] flex flex-col items-start justify-between gap-[40px]">
                    <div className="max-w-[812px] flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                PROGRESS, NOT PERFECTION
                            </span>
                        </div>

                        <h2 className="font-base text-[32px] md:text-[40px] lg:text-[48px] font-bold text-textBlack leading-tight">
                            A journey you can keep building on.
                        </h2>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
                        {journey.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col bg-white rounded-[24px] p-6 border border-lineGrey/50 shadow-sm"
                            >
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-col gap-[18px]">
                                        <div className="text-textBlue text-[36px] md:text-[44px] font-bold font-base">
                                            {String(item.step).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-[22px] md:text-[25px] font-base font-bold text-brandDarkGrey leading-snug border-t border-lineGrey pt-[20px]">
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
            </section>

            {/* Start Points Banner */}
            <section className="w-full bg-trackorange">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[96px] py-[56px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[32px] lg:gap-[64px]">
                    <div className="w-full lg:w-[460px] flex flex-col justify-center gap-[16px]">
                        <div className="flex items-center gap-2">
                            <span className="w-[7px] h-[7px] rounded-full bg-brandBlue inline-block"></span>
                            <span className="font-base text-[12px] font-medium tracking-wider text-brandGrey uppercase">
                                Start where you are
                            </span>
                        </div>
                        <h2 className="font-base text-[32px] md:text-[40px] font-bold text-textBlack leading-tight">
                            New to tech? <br />
                            That's a starting point, too.
                        </h2>
                    </div>
                    <div className="w-full lg:w-[724px] flex flex-col items-start justify-between gap-[20px]">
                        <p className="text-brandGrey text-[16px] md:text-[18px] font-normal font-base leading-relaxed">
                            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation.
                        </p>
                        <button className="hover:opacity-80 text-textBlue text-[16px] font-base font-medium transition-all flex items-center gap-[12px]">
                            Ask about getting started
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Section Comm Invitation */}
            <section className="w-full bg-brandWhite">
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
                                Find a learning track, meet a collaborator, or start a conversation.
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
            </section>

        </div>
    );
}