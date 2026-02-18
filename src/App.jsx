import React, { useState } from 'react';
import Grain from './components/Grain';
import ThreeDHero from './components/ThreeDHero';
import SectorChapters from './components/SectorChapters';
import Navigation from './components/Navigation';
import CareersAndContact from './components/CareersAndContact';
import WhatWeDo from './components/WhatWeDo';
import WhyHudson from './components/WhyHudson';
import WorkforceSolutions from './components/WorkforceSolutions';
import TechnologySolutions from './components/TechnologySolutions';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

function App() {
    const [view, setView] = useState('home'); // 'home', 'workforce', 'technology', 'about', 'careers', 'contact'
    const { scrollYProgress } = useScroll();

    // Subtle background evolution for dark theme
    const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

    const renderView = () => {
        // Handle Submit CV action by opening mail client
        if (view === 'submit-cv') {
            window.location.href = "mailto:tp.numbr@hudsonmanpower.recruitee.com?subject=CV Submission";
            setView('home'); // Reset to home after action
            return null;
        }

        switch (view) {
            case 'workforce':
                return <><WorkforceSolutions key="workforce" /><Footer setView={setView} /></>;
            case 'technology':
                return <><TechnologySolutions key="technology" /><Footer setView={setView} /></>;
            case 'about':
                return <><AboutUs key="about" /><Footer setView={setView} /></>;
            case 'careers':
                return <><Careers key="careers" /><Footer setView={setView} /></>;
            case 'contact':
                return <><ContactUs key="contact" /><Footer setView={setView} /></>;
            default:
                return (
                    <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ThreeDHero />
                        <WhatWeDo />
                        <SectorChapters />
                        <WhyHudson />
                        <CareersAndContact />
                        <Footer setView={setView} />
                    </motion.div>
                );
        }
    };

    return (
        <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
            <CustomCursor />
            <Navigation setView={setView} currentView={view} />
            <Grain />

            {/* Background Evolution Layer */}
            <motion.div
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, #111 0%, #050505 100%)',
                    opacity: bgOpacity,
                    zIndex: -2
                }}
            />

            <AnimatePresence mode="wait">
                {renderView()}
            </AnimatePresence>

        </main>
    );
}

export default App;
