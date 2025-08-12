import React, { useState } from 'react';

// --- Reusable Components ---

// RwP Logo Component
const RwPLogo = ({ colors, size = "2xl" }) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12", 
        lg: "w-16 h-16",
        xl: "w-20 h-20",
        "2xl": "w-24 h-24"
    };
    
    return (
        <div className={`${sizeClasses[size]} flex-shrink-0`}>
            <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" fill={colors.darkPeach} rx="6"/>
                <text x="16" y="22" fontFamily="Arial, sans-serif" fontSize="12" 
                      fontWeight="bold" textAnchor="middle" fill={colors.cream}>
                    RwP
                </text>
            </svg>
        </div>
    );
};

// Services Graphic Component
const ServicesGraphic = ({ colors }) => {
    return (
        <div className="w-full bg-cover bg-center py-16" style={{ 
            backgroundImage: `url('https://storage.googleapis.com/gemini-prod-us-west1-423908530324-assets/images/cb804739-1582-4d94-984c-ed2f458e0a8b.jpg')`,
            backgroundColor: colors.darkBlue 
        }}>
            <div className="bg-black bg-opacity-40">
                <div className="flex flex-col items-center w-full max-w-6xl mx-auto pt-16 pb-16 px-4">
                    
                    <div className="relative flex flex-col items-center space-y-8 w-full">
                        {/* Top Section - Your Vision */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-stretch w-full gap-8">
                            <div className="col-span-1 rounded-2xl p-6 flex flex-col justify-center" style={{
                                background: 'rgba(254, 240, 201, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(254, 240, 201, 0.2)'
                            }}>
                                <h2 className="text-2xl font-bold text-white uppercase">Your Vision</h2>
                                <p className="mt-2 text-gray-300">
                                    You know the outcomes you want to drive, but there's a huge operational workload. 
                                    Dozens of vendors and no time to manage it all. How can you execute on your vision?
                                </p>
                            </div>
                            <div className="col-span-1 lg:col-span-2 relative flex w-full rounded-2xl" style={{
                                boxShadow: '0 0 20px rgba(242, 185, 152, 0.15)'
                            }}>
                                <div className="flex-shrink-0 flex items-center justify-center rounded-l-2xl p-3" 
                                     style={{ 
                                         backgroundColor: colors.cream,
                                         writingMode: 'vertical-rl' 
                                     }}>
                                    <span className="text-xl font-bold tracking-widest transform rotate-180" 
                                          style={{ color: colors.darkBlue }}>
                                        You
                                    </span>
                                </div>
                                <div className="rounded-r-2xl p-4 flex-grow" style={{
                                    background: 'rgba(254, 240, 201, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(254, 240, 201, 0.2)'
                                }}>
                                    <div className="flex justify-around items-center gap-4 flex-wrap h-full">
                                        {[
                                            { name: "Field Sales", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                                            { name: "Revenue Cycle", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                                            { name: "TV + Radio", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h2m0 0v2m0-2H9m2 0h2" },
                                            { name: "Market Data", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                                            { name: "Data Ops", icon: "M4 7v10m0 0h16M4 17h16M4 17a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2H4z" }
                                        ].map((item) => (
                                            <div key={item.name} className="flex flex-col items-center text-center w-20">
                                                <div className="flex justify-center items-center w-16 h-16 bg-black bg-opacity-20 rounded-full">
                                                    <svg className="w-8 h-8" style={{ color: colors.cream }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                                    </svg>
                                                </div>
                                                <p className="mt-2 text-xs text-white font-semibold">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section - Our Partnership */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-stretch w-full gap-8">
                            <div className="col-span-1 rounded-2xl p-6 flex flex-col justify-center" style={{
                                background: 'rgba(254, 240, 201, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(254, 240, 201, 0.2)'
                            }}>
                                <h2 className="text-2xl font-bold text-white uppercase">Our Partnership</h2>
                                <p className="mt-2 text-gray-300">
                                    We are 20-year marketing and data analytics professionals who translate complex business 
                                    and campaign goals to actionable programs for activation. We are your one-stop shop for 
                                    marketing and data partnership.
                                </p>
                            </div>
                            <div className="col-span-1 lg:col-span-2 relative flex w-full rounded-2xl" style={{
                                boxShadow: '0 0 20px rgba(242, 185, 152, 0.15)'
                            }}>
                                <div className="flex-shrink-0 flex items-center justify-center rounded-l-2xl p-3" 
                                     style={{ 
                                         backgroundColor: colors.mediumPeach,
                                         writingMode: 'vertical-rl' 
                                     }}>
                                    <span className="text-xl font-bold tracking-widest transform rotate-180 text-gray-200">
                                        You + RwP
                                    </span>
                                </div>
                                <div className="rounded-r-2xl px-8 py-4 text-center flex-grow flex items-center justify-center" style={{
                                    background: 'rgba(254, 240, 201, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(254, 240, 201, 0.2)'
                                }}>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white tracking-wider">
                                            YOUR VISION + OUR OWNERSHIP
                                        </h2>
                                        <p className="text-base text-gray-300 mt-2">
                                            You know your business. We own the execution of your vision by aligning the right 
                                            services and vendors with your ideal outcomes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom Section - RwP Ownership */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-stretch w-full gap-8">
                            <div className="col-span-1 rounded-2xl p-6 flex flex-col justify-center" style={{
                                background: 'rgba(254, 240, 201, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(254, 240, 201, 0.2)'
                            }}>
                                <h2 className="text-2xl font-bold text-white uppercase">RwP Ownership</h2>
                                <p className="mt-2 text-gray-300">
                                    With the tools and data you have today, and armed with your vision, we drive full-funnel 
                                    operation that delivers the outcomes your vision needs to succeed. Whether a simple website 
                                    or complex data architecture, we take your program and make it part of your ecosystem.
                                </p>
                            </div>
                            <div className="col-span-1 lg:col-span-2 relative w-full">
                                <div className="relative flex items-stretch rounded-3xl shadow-2xl" style={{
                                    background: 'rgba(254, 240, 201, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(254, 240, 201, 0.2)',
                                    boxShadow: '0 0 20px rgba(242, 185, 152, 0.15)'
                                }}>
                                    <div className="flex-shrink-0 flex items-center justify-center rounded-l-3xl p-4" 
                                         style={{ 
                                             backgroundColor: colors.darkPeach,
                                             writingMode: 'vertical-rl' 
                                         }}>
                                        <span className="text-2xl font-bold text-white tracking-widest transform rotate-180">
                                            RwP
                                        </span>
                                    </div>
                                    <div className="flex-grow p-6 space-y-4">
                                        {[
                                            {
                                                title: "Activation & Personalization",
                                                description: "We use your customer data to send targeted messages and show relevant content across all your channels.",
                                                question: "How do I make my marketing more effective today?"
                                            },
                                            {
                                                title: "Analytics & Insights",
                                                description: "We measure your marketing performance to understand what's working, providing the intelligence to make smarter decisions.",
                                                question: "How do I prove the value of my marketing spend?"
                                            },
                                            {
                                                title: "Data Storage & Processing",
                                                description: "We build a central library for all your business data, breaking down silos and creating a single source of truth.",
                                                question: "How do I get a single, clear picture of my business?"
                                            },
                                            {
                                                title: "Data Ingestion & Unification",
                                                description: "We connect data from every customer touchpoint to build a complete, real-time profile for each individual.",
                                                question: "How do I deliver a truly seamless, personalized experience?"
                                            }
                                        ].map((service) => (
                                            <div key={service.title} className="rounded-xl p-3 text-left" style={{
                                                background: 'rgba(36, 56, 64, 0.6)',
                                                border: '1px solid rgba(254, 240, 201, 0.1)'
                                            }}>
                                                <h3 className="font-bold text-white">{service.title}</h3>
                                                <p className="text-xs mt-1" style={{ color: colors.cream }}>
                                                    {service.description}
                                                </p>
                                                <p className="text-xs mt-2 font-bold italic text-gray-300">
                                                    Answering: "{service.question}"
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Output Section */}
                        <div className="relative z-10 w-full max-w-4xl text-center rounded-2xl p-6 mt-8" style={{
                            background: 'rgba(254, 240, 201, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(254, 240, 201, 0.2)'
                        }}>
                            <h3 className="text-lg font-bold text-white uppercase">Where Our Work Comes to Life</h3>
                            <p className="mt-2 text-base text-gray-300">
                                Email Marketing • SMS Marketing • Websites • PPC • SEO • CDP • API Automation • 
                                Big Data Analytics • Omni-Channel Orchestration • Personalization • Social Media Execution
                            </p>
                            <div className="relative w-full h-24 mt-4">
                                {[
                                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", position: "15%" },
                                    { icon: "M13 10V3L4 14h7v7l9-11h-7z", position: "32.5%" },
                                    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", position: "50%" },
                                    { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", position: "67.5%" },
                                    { icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", position: "85%" }
                                ].map((item, index) => (
                                    <div key={index} 
                                         className="absolute flex justify-center items-center w-16 h-16 rounded-full" 
                                         style={{ 
                                             left: item.position, 
                                             top: 0, 
                                             transform: 'translateX(-50%)',
                                             background: 'rgba(254, 240, 201, 0.1)',
                                             backdropFilter: 'blur(10px)',
                                             border: '1px solid rgba(254, 240, 201, 0.2)'
                                         }}>
                                        <svg className="w-8 h-8" style={{ color: colors.cream }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Header Component
const Header = ({ colors, navLinks, onNavigate, isMenuOpen, setIsMenuOpen, currentPage }) => (
    <header className="relative z-20 flex items-center justify-between p-4 text-white sm:p-6 md:p-8">
        <div 
            className="cursor-pointer" 
            onClick={() => onNavigate('Home')}
        >
            <RwPLogo colors={colors} size="md" />
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
const Footer = ({ footerLinks, onNavigate }) => (
    <footer className="relative z-10 w-full bg-white p-6 text-center shadow-inner">
        <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-2">
                {footerLinks.map((link) => (
                    <a key={link.name} 
                       href="#" 
                       onClick={(e) => { 
                           e.preventDefault(); 
                           if (link.action === 'scroll') {
                               onNavigate(link.page);
                               // Small delay to ensure page loads before scrolling
                               setTimeout(() => {
                                   const element = document.getElementById(link.scrollTo);
                                   if (element) {
                                       element.scrollIntoView({ behavior: 'smooth' });
                                   }
                               }, 100);
                           } else {
                               onNavigate(link.page);
                           }
                       }}
                       className="text-sm text-gray-700 transition-colors hover:text-black">
                        {link.name}
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

// Homepage Component - Services Graphic Removed
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

// Value Proposition Page Component - Only Services Graphic
const ValuePropPage = ({ colors }) => {
    return (
        <div className="flex flex-col bg-white text-gray-800">
            <div className="w-full bg-gray-100 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>Your Vision + Our Ownership</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A deep dive into how we transform your business vision into operational reality through our comprehensive approach to revenue operations.
                    </p>
                </div>
            </div>
            
            {/* Services Graphic Section */}
            <div id="services-graphic">
                <ServicesGraphic colors={colors} />
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
        <div className="mx-auto w-full max-w-7xl px-6 py-8">
            <div className="relative flex items-center justify-between min-w-[700px] overflow-x-auto">
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


// Methodology Page Component - Combined with Value Prop Content
const MethodologyPage = ({ colors }) => {
    const valuePoints = [
        {
            title: "Your Central Command for Growth",
            description: "We identify the right mix of partners and platforms for your use case, then manage and operate them to align with your business needs.",
            icon: "hub"
        },
        {
            title: "A Flexible, Empowering Partnership",
            description: "Our goal is to build a robust operation that you can eventually own. We create the systems and processes, then manage the program with the option to transfer it to your permanent team when the time is right.",
            icon: "flexible"
        },
        {
            title: "The Perfect Fit for Consultants & Agencies",
            description: "Need to layer in digital engagement, customer data flows, or advanced analytics for your clients? We partner with you to fill out your value proposition.",
            icon: "partner"
        }
    ];

    const stages = [
        { name: "Root", title: "Discovery Workshop", description: "This is where we establish strong foundations. We meet with stakeholders to whiteboard the entire customer journey and perform a deep data inventory.", points: ["Half-day 'Grove Session'", "Data Inventory & Gap Analysis"] },
        { name: "Trunk", title: "Data Blueprint & Strategy", description: "Like a solid trunk supports a tree, we build the core blueprint for your data models, system integrations, and GTM processes, complete with a strategic roadmap.", points: ["Architecture & Alignment", "Roadmap Creation & KPI Definition"] },
        { name: "Branches", title: "Implementation & Activation", description: "We branch out to build and integrate your tools, automate workflows, and leverage our partner ecosystem to bring the strategy to life.", points: ["Build & Integrate", "Partner Ecosystem Leverage"] },
        { name: "Canopy", title: "Enablement & Adoption", description: "The canopy represents nurture and growth. We provide training, documentation, and change management to ensure your teams adopt the new systems.", points: ["Team Training & Change Management", "Fractional Leadership"] },
        { name: "Fruit", title: "Measure & Optimize", description: "The fruit signifies results. We deliver real-time performance dashboards and hold regular retrospectives to refine tactics and drive continuous improvement.", points: ["Performance Dashboards", "Continuous Improvement Cycles"] }
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
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{color: colors.darkBlue}}>From Root to Fruit</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our process is rooted in stability and growth—like a Redwood—and delivered with the warmth and hospitality of a Pineapple. We turn complexity into clarity.
                    </p>
                </div>
                <MethodologyDiagram colors={colors} />
            </div>
            
            <div className="mx-auto w-full max-w-7xl p-6 py-12 md:p-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - What We Are (Narrower) */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left" style={{color: colors.darkBlue}}>What We Are</h2>
                        <div className="space-y-6">
                            {valuePoints.map((point) => (
                                <div key={point.title} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{backgroundColor: colors.lightPeach}}>
                                            <svg className="h-4 w-4" style={{color: colors.darkPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                {icons[point.icon]}
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold" style={{color: colors.darkBlue}}>{point.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - How We Work (Wider) */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left" style={{color: colors.darkBlue}}>How We Work</h2>
                        <div className="space-y-6">
                            {stages.map((stage, index) => (
                                <div key={stage.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex flex-col items-center">
                                           <div className="flex items-center justify-center h-12 w-12 rounded-full text-white font-bold text-lg" style={{backgroundColor: colors.darkPeach}}>
                                               {index + 1}
                                           </div>
                                           <div className="mt-2 text-sm font-bold" style={{color: colors.darkBlue}}>{stage.name}</div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-semibold mb-2" style={{color: colors.darkBlue}}>{stage.title}</h3>
                                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{stage.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {stage.points.map(point => (
                                                    <span key={point} className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full" style={{backgroundColor: colors.lightPeach, color: colors.darkBlue}}>
                                                        <svg className="h-3 w-3" style={{color: colors.darkPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {point}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
        <div className="flex flex-col bg-white text-gray-800">
            {/* Work Philosophy Section - Moved to Top */}
            <div className="w-full bg-gray-100 py-16">
                <div className="mx-auto w-full max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4" style={{color: colors.darkBlue}}>Our Work Philosophy</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are a collective of strategists, architects, and operators who believe that sustainable growth is built on a foundation of clarity and partnership. This is a look at the work we love to do.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {workPillars.map((pillar) => (
                            <div key={pillar.title} className="flex h-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{backgroundColor: colors.lightPeach}}>
                                        <svg className="h-6 w-6" style={{color: colors.darkPeach}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {icons[pillar.icon]}
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-semibold" style={{color: colors.darkBlue}}>{pillar.title}</h2>
                                </div>
                                <p className="mt-4 flex-grow text-gray-600">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Section - Meet the Principal */}
            <div className="w-full bg-white py-16">
                <div className="mx-auto max-w-6xl px-6">
                    {/* Header with smaller profile image */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                        {/* Profile Image - Smaller */}
                        <div className="relative flex-shrink-0">
                            {/* Orlando Map Background - Subtle Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-8">
                                <svg width="200" height="200" viewBox="0 0 200 200" className="text-gray-300">
                                    {/* Orlando city outline - simplified geometric representation */}
                                    <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.3"/>
                                    <circle cx="85" cy="85" r="8" fill="currentColor" opacity="0.2"/>
                                    <circle cx="115" cy="85" r="6" fill="currentColor" opacity="0.2"/>
                                    <circle cx="100" cy="125" r="10" fill="currentColor" opacity="0.2"/>
                                    <circle cx="75" cy="110" r="5" fill="currentColor" opacity="0.15"/>
                                    <circle cx="125" cy="110" r="7" fill="currentColor" opacity="0.15"/>
                                    {/* Road/connection lines */}
                                    <line x1="85" y1="85" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                                    <line x1="115" y1="85" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                                    <line x1="100" y1="100" x2="100" y2="125" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                                    <line x1="75" y1="110" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
                                    <line x1="125" y1="110" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
                                </svg>
                            </div>
                            
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-8 border-white relative z-10">
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/D4E03AQEdmLkXCJ4QQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705274931482?e=1758153600&v=beta&t=4BqCmYE2vVEw4a4CbaeWnCT0J2pnh-zN7fs8T64Pt64"
                                    alt="Nate Bullock"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Header Content */}
                        <div className="text-center md:text-left flex-grow">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{color: colors.darkBlue}}>
                                Meet the Principal
                            </h2>
                            <h3 className="text-2xl font-semibold mb-2" style={{color: colors.darkPeach}}>
                                Nate Bullock
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                RevOps Leader & Data Systems Architect
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="https://linkedin.com/in/natebullock/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-lg px-6 py-3 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    style={{ backgroundColor: '#0077B5' }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                                <a
                                    href="https://www.praesumhealthcare.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-lg px-6 py-3 font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl border-2"
                                    style={{ 
                                        borderColor: colors.darkPeach, 
                                        color: colors.darkPeach,
                                        backgroundColor: 'white'
                                    }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Praesum Healthcare
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Professional Summary - Full Width */}
                    <div className="mb-12">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                                Twenty-year SaaS veteran combining enterprise sales expertise with hands-on 
                                technical mastery to build revenue systems that turn insight into impact. Proven 
                                record aligning sales, marketing and customer success to design automated data 
                                pipelines, optimize CRM architecture and drive predictable growth.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Currently serving as Director of Sales & Marketing Operations at Praesum Healthcare, 
                                leading cross-functional teams to accelerate revenue and profitability while 
                                translating board-level strategy into technical execution.
                            </p>
                        </div>
                    </div>

                    {/* Core Competencies - Grid Layout */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: colors.darkBlue}}>Core Competencies</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Revenue Operations Strategy & Leadership</h4>
                                    <p className="text-sm text-gray-600">Drive unified go-to-market strategy across sales, marketing and customer success</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">GTM Process Design & Optimization</h4>
                                    <p className="text-sm text-gray-600">Design scalable processes and automate hand-offs to increase pipeline velocity</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">CRM & Data Architecture</h4>
                                    <p className="text-sm text-gray-600">Expert in Salesforce, Emarsys, BigQuery, Redshift and Snowflake</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Pipeline Forecasting & Analytics</h4>
                                    <p className="text-sm text-gray-600">Develop dashboards and predictive models for revenue attribution</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Revenue Automation & Integration</h4>
                                    <p className="text-sm text-gray-600">Leverage n8n, Hex, AI and no/low-code tools to automate workflows</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.darkPeach}}></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Team Leadership & Stakeholder Management</h4>
                                    <p className="text-sm text-gray-600">Build high-performing RevOps teams and influence board-level decisions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            
            <div className="mx-auto w-full max-w-6xl p-6 py-12 md:p-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Contact Form - 75% width (3/4 columns) */}
                    <div className="lg:col-span-3">
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

                    {/* Personal Profile Sidebar - 25% width (1/4 column) */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                            {/* Profile Image */}
                            <div className="relative flex justify-center mb-4">
                                {/* Orlando Map Background - Subtle Watermark */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-8">
                                    <svg width="80" height="80" viewBox="0 0 200 200" className="text-gray-300">
                                        <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.3"/>
                                        <circle cx="85" cy="85" r="8" fill="currentColor" opacity="0.2"/>
                                        <circle cx="115" cy="85" r="6" fill="currentColor" opacity="0.2"/>
                                        <circle cx="100" cy="125" r="10" fill="currentColor" opacity="0.2"/>
                                        <circle cx="75" cy="110" r="5" fill="currentColor" opacity="0.15"/>
                                        <circle cx="125" cy="110" r="7" fill="currentColor" opacity="0.15"/>
                                        <line x1="85" y1="85" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                                        <line x1="115" y1="85" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                                        <line x1="100" y1="100" x2="100" y2="125" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                                        <line x1="75" y1="110" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
                                        <line x1="125" y1="110" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
                                    </svg>
                                </div>
                                
                                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-3 border-white relative z-10">
                                    <img 
                                        src="https://media.licdn.com/dms/image/v2/D4E03AQEdmLkXCJ4QQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705274931482?e=1758153600&v=beta&t=4BqCmYE2vVEw4a4CbaeWnCT0J2pnh-zN7fs8T64Pt64"
                                        alt="Nate Bullock"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-1" style={{color: colors.darkBlue}}>
                                    Nate Bullock
                                </h3>
                                <p className="text-sm mb-3" style={{color: colors.darkPeach}}>
                                    Principal
                                </p>
                                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                    Twenty-year SaaS veteran specializing in revenue operations and data systems architecture. 
                                    Currently Director at Praesum Healthcare.
                                </p>
                                
                                <div className="bg-white rounded-md p-3 mb-4 shadow-sm">
                                    <p className="text-xs text-gray-700 italic leading-relaxed">
                                        "We provide a single source of management for your entire go-to-market ecosystem, 
                                        turning complexity into clear, scalable programs."
                                    </p>
                                </div>
                                
                                <a
                                    href="https://linkedin.com/in/natebullock/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-lg px-4 py-2 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl text-xs"
                                    style={{ backgroundColor: '#0077B5' }}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
        { name: "Data & Systems Architecture", page: "Value Prop", action: "scroll", scrollTo: "services-graphic" },
        { name: "Revenue Automation", page: "Meet R&P" },
        { name: "Analytics & Insights", page: "Value Prop", action: "scroll", scrollTo: "services-graphic" },
        { name: "RevOps Leadership", page: "Value Prop" },
        { name: "Methodology", page: "Methodology" },
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
            <Footer footerLinks={footerLinks} onNavigate={handleNavigate} />
        </div>
    );
};

export default App;