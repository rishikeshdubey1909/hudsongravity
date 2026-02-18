import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';

const Navigation = ({ setView, currentView }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", id: 'home' },
        { name: "Workforce Solutions", id: 'workforce' },
        { name: "Technology Solutions", id: 'technology' },
        { name: "About Us", id: 'about' },
        { name: "Careers", id: 'careers' },
        { name: "Contact Us", id: 'contact' },
        { name: "Submit CV", id: 'submit-cv' },
    ];

    const handleNav = (id) => {
        setView(id);
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <>
            {/* Cinematic Corner Anchors */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100, padding: '2.5rem' }}>

                {/* Top Left: Logo / Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: '2.5rem',
                        left: '2.5rem',
                        pointerEvents: 'auto',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        padding: '12px 24px',
                        borderRadius: '100px',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    <button
                        onClick={() => handleNav('home')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            padding: 0
                        }}
                    >
                        <img
                            src="/logo.jpg"
                            alt="Hudson Gravity"
                            style={{
                                height: '45px',
                                width: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                                mixBlendMode: 'multiply',
                                filter: 'contrast(1.05)'
                            }}
                        />
                    </button>
                </motion.div>

                {/* Top Right: Minimal Toggle */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ position: 'absolute', top: '2.5rem', right: '2.5rem', pointerEvents: 'auto' }}
                >
                    <button
                        onClick={() => setIsOpen(true)}
                        className="glass"
                        style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '12px 24px',
                            borderRadius: '100px',
                            fontFamily: 'var(--font-sans)',
                            color: '#1a1a1a',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                        }}
                    >
                        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Explore</span>
                        <MenuIcon size={18} strokeWidth={1.5} />
                    </button>
                </motion.div>

                {/* Bottom Right: Discovery Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', pointerEvents: 'auto' }}
                >
                    <button
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        className="hover-reveal"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            color: 'var(--text-primary)',
                            paddingBottom: '0.5rem'
                        }}
                    >
                        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Inquiry</span>
                        <ArrowUpRight size={16} strokeWidth={1} />
                    </button>
                </motion.div>
            </div>

            {/* Cinematic Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: '#060608',
                            zIndex: 1000,
                            display: 'grid',
                            gridTemplateColumns: '1fr 340px',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Subtle grid texture */}
                        <div style={{
                            position: 'absolute', inset: 0, pointerEvents: 'none',
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '32px 32px',
                        }} />

                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'absolute', top: '2.5rem', right: '2.5rem',
                                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%', width: '48px', height: '48px',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'rgba(255,255,255,0.8)', zIndex: 10,
                            }}
                        >
                            <X size={20} strokeWidth={1.5} />
                        </button>

                        {/* Left: Nav links */}
                        <div style={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', padding: '8vw 6vw',
                            borderRight: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <p style={{
                                fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)',
                                marginBottom: '3rem',
                            }}>Navigation</p>
                            <nav style={{ display: 'flex', flexDirection: 'column' }}>
                                {menuItems.map((item, i) => (
                                    <motion.button
                                        key={i}
                                        initial={{ x: -60, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.06 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                        onClick={() => handleNav(item.id)}
                                        style={{
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                                            textAlign: 'left',
                                            color: currentView === item.id ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                                            lineHeight: 1.15,
                                            display: 'flex', alignItems: 'baseline', gap: '1.5rem',
                                            padding: '0.6rem 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            width: '100%',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (currentView !== item.id) e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.fontStyle = 'italic';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (currentView !== item.id) e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                                            e.currentTarget.style.fontStyle = 'normal';
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '0.65rem', fontStyle: 'normal',
                                            fontFamily: 'var(--font-sans)', opacity: 0.25,
                                            fontWeight: 500, letterSpacing: '0.1em', minWidth: '28px',
                                        }}>0{i + 1}</span>
                                        {item.name}
                                        {currentView === item.id && (
                                            <span style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                                        )}
                                    </motion.button>
                                ))}
                            </nav>
                        </div>

                        {/* Right: Contact panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'flex-end', padding: '4rem 3rem',
                                gap: '3rem',
                            }}
                        >
                            <div>
                                <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-sans)', marginBottom: '1.2rem' }}>Get in Touch</p>
                                <a href="mailto:info@hudsonmanpower.com" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    info@hudsonmanpower.com
                                </a>
                                <a href="mailto:career@hudsonmanpower.com" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    career@hudsonmanpower.com
                                </a>
                            </div>

                            <div>
                                <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)', marginBottom: '1.2rem' }}>Offices</p>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontFamily: 'var(--font-sans)', lineHeight: 1.7, marginBottom: '1rem' }}>
                                    🇺🇸 Hoboken, NJ — USA<br />
                                    🇮🇳 Mumbai — India
                                </p>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}>
                                <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)', marginBottom: '1rem' }}>Follow</p>
                                <a
                                    href="https://www.linkedin.com/company/hudson-manpower"
                                    target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-sans)', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#0A66C2'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn
                                </a>
                            </div>

                            <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-sans)' }}>
                                Hudson Manpower<br />Precise Global Deployment
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
