import React, { useState } from 'react';

// --- Reusable Components ---

// Header Component
const Header = ({ colors, navLinks, onNavigate, isMenuOpen, setIsMenuOpen, currentPage }) => (
    <header className="relative z-20 flex items-center justify-between p-4 text-white sm:p-6 md:p-8">
        <div 
            className="cursor-pointer text-2xl font-bold tracking-wider" 
            style={{ color: colors.cream }}
            onClick={() => onNavigate('Home')}
        >
            Redwoods & Pineapples
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                    <a
                        key={link.name}
                        href="#"
                        onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}
                        className={`text-lg transition-colors hover:text-opacity-80 pb-1 border-b-2 ${isActive ? '' : 'border-transparent'}`}
                        style={{ color: colors.cream, borderColor: isActive ? colors.darkPeach : 'transparent' }}
                    >
                        {link.name}
                    </a>
                );
            })}
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate('Get Connected'); }}
                className="rounded-md px-5 py-2.5 text-lg font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: colors.darkPeach, color: colors.cream }}
            >
                Get Connected
            </a>
        </nav>
        <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.cream}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
        </button>
    </header>
);

// Mobile Menu Component
const MobileMenu = ({ colors, navLinks, onNavigate, currentPage }) => (
     <div
        className="relative z-10 mx-4 flex flex-col items-center space-y-4 rounded-lg p-6 md:hidden"
        style={{ backgroundColor: `${colors.darkBlue}e6` }} // Semi-transparent background
    >
        {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
                <a
                    key={link.name}
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}
                    className="text-lg transition-colors hover:text-opacity-80"
                    style={{ 
                        color: isActive ? colors.darkPeach : colors.cream,
                        fontWeight: isActive ? 'bold' : 'normal'
                    }}
                >
                    {link.name}
                </a>
            );
        })}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Get Connected'); }} className="w-full rounded-md px-5 py-3 text-center text-lg font-semibold transition-transform hover:scale-105" style={{ backgroundColor: colors.darkPeach, color: colors.cream }}>
            Get Connected
        </a>
    </div>
);


// Footer Component
const Footer = ({ footerLinks }) => (
    <footer className="relative z-10 w-full bg-white p-6 text-center shadow-inner">
        <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-2">
                {footerLinks.map((link) => (
                    <a key={link} href="#" className="text-sm text-gray-700 transition-colors hover:text-black">
                        {link}
                    </a>
                ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
                © 2025 Redwoods & Pineapples
            </p>
        </div>
    </footer>
);


// --- Page Components ---

// Homepage Component
const HomePage = ({ colors, onNavigate }) => (
    <div
        className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
        style={{ 
            backgroundImage: `url('https://storage.googleapis.com/gemini-prod-us-west1-423908530324-assets/images/cb804739-1582-4d94-984c-ed2f458e0a8b.jpg')`,
            backgroundColor: colors.darkBlue,
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center p-4">
            <h1
                className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ color: colors.cream, textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
                Redwoods & Pineapples
            </h1>
            <p 
                className="mt-4 max-w-2xl text-2xl font-light tracking-wide md:text-3xl"
                style={{ color: colors.cream, textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
            >
                DATA DRIVEN GROWTH
            </p>
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate('Get Connected'); }}
                className="mt-12 rounded-lg px-10 py-4 text-xl font-bold shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: colors.darkPeach, color: colors.cream }}
            >
                Get Connected
            </a>
            <p 
                className="mt-8 max-w-3xl px-4 text-lg font-light text-white text-opacity-90 md:text-xl"
                style={{ color: colors.cream, textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
            >
                We translate your revenue goals into clean, scalable operations—from strategy and systems to hands-on execution.
            </p>
        </main>
    </div>
);

// Value Proposition Page Component
const ValuePropPage = ({ colors }) => {
    const valuePoints = [
        {
            title: "Your Central Command for Growth",
            description: "We identify the right mix of partners and platforms for your use case, then manage and operate them to align with your business needs. The result is a data-driven sales and marketing program that's built for repeatable success.",
            icon: "hub"
        },
        {
            title: "A Flexible, Empowering Partnership",
            description: "Our goal is to build a robust operation that you can eventually own. We create the systems and processes, then manage the program with the option to transfer it to your permanent team when the time is right.",
            icon: "flexible"
        },
        {
            title: "The Perfect Fit for Consultants & Agencies",
            description: "Need to layer in digital engagement, customer data flows, or advanced analytics for your clients? We partner with you to fill out your value proposition, acting as the technical and operational engine that brings your strategic vision to life.",
            icon: "partner"
        }
    ];

    const icons = {
        hub: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4-4v8m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />,
        flexible: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        partner: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    };

    return (
        <div className="flex flex-col bg-white text-gray-800">
            <div className="w-full bg-gray-100 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>Your Central Hub for Revenue Operations</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Feeling overwhelmed by where to start? We provide a single source of management for your entire go-to-market ecosystem, turning complexity into a clear, scalable program.
                    </p>
                </div>
            </div>
            
            <div className="mx-auto w-full max-w-4xl p-6 py-12 md:p-8 md:py-16">
                <div className="space-y-12">
                    {valuePoints.map((point) => (
                        <div key={point.title} className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                            <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-full" style={{backgroundColor: colors.lightPeach}}>
                                <svg className="h-10 w-10" style={{color: colors.darkPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {icons[point.icon]}
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold" style={{color: colors.darkBlue}}>{point.title}</h2>
                                <p className="mt-2 text-gray-600">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Methodology Diagram Component
const MethodologyDiagram = ({ colors }) => {
    const stages = [
        { name: "Root", icon: ( <path d="M3 12h2l2.5-2.5L10 12l2.5 2.5L15 12l2.5-2.5L20 12h2" /> ) },
        { name: "Trunk", icon: ( <rect x="10" y="5" width="4" height="14" rx="1" /> )},
        { name: "Branches", icon: ( <><path d="M12 21V8" /><path d="M12 8l-4-4" /><path d="M12 8l4-4" /><path d="M12 15l-4 4" /><path d="M12 15l4 4" /></> )},
        { name: "Canopy", icon: ( <path d="M12 2a9 9 0 0 1 9 9c0 4-4 9-9 9s-9-5-9-9a9 9 0 0 1 9-9z" /> )},
        { name: "Fruit", icon: ( <><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M12 22c-3.333-3.333-5-6.667-5-10a5 5 0 1 1 10 0c0 3.333-1.667 6.667-5 10z" /><path d="M12 2v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="M2 12h2" /><path d="m4.93 19.07 1.41-1.41" /><path d="M12 22v-2" /><path d="m19.07 19.07-1.41-1.41" /><path d="M22 12h-2" /><path d="m19.07 4.93-1.41 1.41" /></> )}
    ];

    return (
        <div className="w-full overflow-x-auto p-8">
            <div className="relative flex items-center justify-between min-w-[700px]">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2" style={{backgroundColor: colors.lightPeach}}></div>
                
                {stages.map((stage) => (
                    <div key={stage.name} className="relative z-10 flex flex-col items-center">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 bg-gray-100" style={{borderColor: colors.darkPeach}}>
                            <svg className="w-10 h-10" style={{color: colors.darkBlue}} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                {stage.icon}
                            </svg>
                        </div>
                        <p className="mt-3 text-lg font-semibold" style={{color: colors.darkBlue}}>{stage.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Methodology Page Component
const MethodologyPage = ({ colors }) => {
    const stages = [
        { name: "Root", title: "Discovery Workshop", description: "This is where we establish strong foundations. We meet with stakeholders to whiteboard the entire customer journey and perform a deep data inventory.", points: ["Half-day “Grove Session”", "Data Inventory & Gap Analysis"] },
        { name: "Trunk", title: "Data Blueprint & Strategy", description: "Like a solid trunk supports a tree, we build the core blueprint for your data models, system integrations, and GTM processes, complete with a strategic roadmap.", points: ["Architecture & Alignment", "Roadmap Creation & KPI Definition"] },
        { name: "Branches", title: "Implementation & Activation", description: "We branch out to build and integrate your tools, automate workflows, and leverage our partner ecosystem to bring the strategy to life.", points: ["Build & Integrate", "Partner Ecosystem Leverage"] },
        { name: "Canopy", title: "Enablement & Adoption", description: "The canopy represents nurture and growth. We provide training, documentation, and change management to ensure your teams adopt the new systems.", points: ["Team Training & Change Management", "Fractional Leadership"] },
        { name: "Fruit", title: "Measure & Optimize", description: "The fruit signifies results. We deliver real-time performance dashboards and hold regular retrospectives to refine tactics and drive continuous improvement.", points: ["Performance Dashboards", "Continuous Improvement Cycles"] }
    ];

    return (
        <div className="flex flex-col bg-white text-gray-800">
            <div className="w-full bg-gray-100 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>From Root to Fruit</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our process is rooted in stability and growth—like a Redwood—and delivered with the warmth and hospitality of a Pineapple. We turn complexity into clarity.
                    </p>
                </div>
                <MethodologyDiagram colors={colors} />
            </div>
            
            <div className="mx-auto w-full max-w-4xl p-6 py-12 md:p-8 md:py-16">
                <div className="space-y-12">
                    {stages.map((stage, index) => (
                        <div key={stage.name} className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 flex flex-col items-center md:w-32">
                               <div className="flex items-center justify-center h-16 w-16 rounded-full text-white font-bold text-2xl" style={{backgroundColor: colors.darkPeach}}>
                                   {index + 1}
                               </div>
                               <div className="mt-2 text-xl font-bold" style={{color: colors.darkBlue}}>{stage.name}</div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-2xl font-semibold" style={{color: colors.darkBlue}}>{stage.title}</h2>
                                <p className="mt-2 text-gray-600">{stage.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {stage.points.map(point => (
                                        <li key={point} className="flex items-start">
                                            <svg className="h-6 w-6 flex-shrink-0 mr-2" style={{color: colors.mediumPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Meet R&P Page Component
const MeetRandPPage = ({ colors }) => {
    const workPillars = [
        { title: "We Are Architects of Clarity", description: "We design and build the foundational systems that create a single source of truth. From untangling complex CRM data to engineering data warehouses, we turn data chaos into a stable, reliable asset.", icon: "architect" },
        { title: "We Are Customer-Centric Strategists", description: "We map every step of your customer's journey, from their first touch to retention. This allows us to develop GTM blueprints and strategies that are not just smart, but also deeply aligned with how your customers want to buy.", icon: "strategy" },
        { title: "We Are Automation & Efficiency Experts", description: "We build the engines that drive your growth. This means creating multi-channel campaigns, implementing intelligent lead scoring, and automating handoffs with modern tools and AI, freeing your team to focus on high-value work.", icon: "automation" },
        { title: "We Are Insight-Driven Analysts", description: "Data is only useful if it tells a story. We craft the dashboards, cohort analyses, and predictive models that illuminate the path forward, giving your leadership the clarity needed to make confident decisions.", icon: "analytics" },
        { title: "We Are Your Embedded Partners & Mentors", description: "We go beyond consulting by serving as interim leaders and providing hands-on workshops. We don't just build systems; we upskill your team and embed ourselves to manage change and ensure growth is sustainable.", icon: "leadership" },
        { title: "We Are Cross-Functional Navigators", description: "We are the glue that connects disparate teams. We serve as the central voice in your organization, bringing marketing, sales, and product together under a unified program to drive critical business outcomes.", icon: "navigator" }
    ];
    const icons = {
        architect: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />,
        strategy: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
        automation: (<><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>),
        analytics: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />,
        leadership: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
        navigator: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    };
    return (
        <div className="flex flex-col bg-white text-gray-800"><div className="w-full bg-gray-100 py-16"><div className="mx-auto max-w-4xl px-6 text-center"><h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>Meet Redwoods & Pineapples</h1><p className="mt-6 text-lg leading-8 text-gray-600">We are a collective of strategists, architects, and operators who believe that sustainable growth is built on a foundation of clarity and partnership. This is a look at the work we love to do.</p></div></div><div className="mx-auto w-full max-w-7xl p-6 py-12 md:p-8 md:py-16"><div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">{workPillars.map((pillar) => (<div key={pillar.title} className="flex h-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"><div className="flex items-center gap-4"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{backgroundColor: colors.lightPeach}}><svg className="h-6 w-6" style={{color: colors.darkPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[pillar.icon]}</svg></div><h2 className="text-xl font-semibold" style={{color: colors.darkBlue}}>{pillar.title}</h2></div><p className="mt-4 flex-grow text-gray-600">{pillar.description}</p></div>))}</div></div></div>
    );
};

// Get Connected Page Component
const GetConnectedPage = ({ colors }) => {
    return (
        <div className="flex flex-col bg-white text-gray-800">
            <div className="w-full bg-gray-100 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>Get Connected</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Let's start a conversation. We're ready to listen and explore how we can help you achieve your growth goals.
                    </p>
                </div>
            </div>
            
            <div className="mx-auto w-full max-w-2xl p-6 py-12 md:p-8 md:py-16">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" style={{'--tw-ring-color': colors.darkPeach}} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" style={{'--tw-ring-color': colors.darkPeach}} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" style={{'--tw-ring-color': colors.darkPeach}} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
                         <p className="text-xs text-gray-500 mt-1">We may be in our 40s, but we're fluent in text. Feel free to leave your number.</p>
                        <div className="mt-2.5">
                            <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" style={{'--tw-ring-color': colors.darkPeach}} />
                        </div>
                    </div>
                     <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input id="whatsapp" aria-describedby="whatsapp-description" name="whatsapp" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" style={{'--tw-ring-color': colors.darkPeach, '--tw-text-color': colors.darkPeach}} />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="whatsapp" className="font-medium text-gray-900">Use WhatsApp</label>
                            <p id="whatsapp-description" className="text-gray-500">Check this box if you're international or prefer to connect via WhatsApp.</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">How can we help?</label>
                        <div className="mt-2.5">
                            <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" style={{'--tw-ring-color': colors.darkPeach}} defaultValue={""} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: colors.darkPeach }}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// Main App Component
const App = () => {
    // --- STATE ---
    const [currentPage, setCurrentPage] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // --- DATA ---
    const navLinks = [
        { name: "Methodology", page: "Methodology" },
        { name: "Value Prop", page: "Value Prop" },
        { name: "Meet R&P", page: "Meet R&P" },
    ];
    const footerLinks = [
        "Data & Systems Architecture",
        "Revenue Automation",
        "Analytics & Insights",
        "RevOps Leadership",
        "Methodology",
    ];
    const colors = {
        darkBlue: '#243840',
        cream: '#FEF0C9',
        lightPeach: '#F2B998',
        mediumPeach: '#D9936A',
        darkPeach: '#D97762',
    };

    // --- LOGIC ---
    const handleNavigate = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false); // Close menu on navigation
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePage colors={colors} onNavigate={handleNavigate} />;
            case 'Value Prop':
                return <ValuePropPage colors={colors} />;
            case 'Methodology':
                return <MethodologyPage colors={colors} />;
            case 'Meet R&P':
                return <MeetRandPPage colors={colors} />;
            case 'Get Connected':
                return <GetConnectedPage colors={colors} />;
            // Add other pages here
            default:
                return <HomePage colors={colors} onNavigate={handleNavigate} />;
        }
    };

    // --- RENDER ---
    return (
        <div className="font-sans">
             <div className="relative">
                {/* The header is part of the page content for the homepage, but needs to be separate for others */}
                {currentPage === 'Home' ? null : (
                    <div className="bg-cover bg-center" style={{backgroundImage: `url('https://storage.googleapis.com/gemini-prod-us-west1-423908530324-assets/images/cb804739-1582-4d94-984c-ed2f458e0a8b.jpg')`}}>
                         <div className="bg-black bg-opacity-40">
                            <Header currentPage={currentPage} colors={colors} navLinks={navLinks} onNavigate={handleNavigate} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                            {isMenuOpen && <MobileMenu currentPage={currentPage} colors={colors} navLinks={navLinks} onNavigate={handleNavigate} />}
                         </div>
                    </div>
                )}
                 {currentPage === 'Home' && (
                    <div className="absolute top-0 left-0 right-0 z-20">
                        <Header currentPage={currentPage} colors={colors} navLinks={navLinks} onNavigate={handleNavigate} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        {isMenuOpen && <MobileMenu currentPage={currentPage} colors={colors} navLinks={navLinks} onNavigate={handleNavigate} />}
                    </div>
                 )}
            </div>
            
            {renderPage()}
            <Footer footerLinks={footerLinks} />
        </div>
    );
};

export default App;
