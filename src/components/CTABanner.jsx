import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = ({
    heading = "Ready to Build Your Dream Team?",
    subtext = "Whether you're hiring top talent or looking for your next opportunity — let's make it happen.",
    buttonLabel = "Get in Touch",
    email = "career@hudsonmanpower.com",
    subject = "Inquiry from Hudson Website",
}) => {
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'relative',
                overflow: 'hidden',
                margin: '0 8vw 8vw',
                borderRadius: '20px',
                padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 5rem)',
                background: 'linear-gradient(135deg, #1a0e00 0%, #3d1f00 50%, #1a0e00 100%)',
                border: '1px solid rgba(200, 169, 81, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '3rem',
                flexWrap: 'wrap',
            }}
        >
            {/* Glow blobs */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(200,169,81,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 90% 50%, rgba(200,169,81,0.08) 0%, transparent 70%)',
            }} />

            {/* Text */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
                <p style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                }}>
                    Work With Us
                </p>
                <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    lineHeight: 1.1,
                    color: '#fff',
                    marginBottom: '1rem',
                    fontWeight: 400,
                }}>
                    {heading}
                </h3>
                <p style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    margin: 0,
                }}>
                    {subtext}
                </p>
            </div>

            {/* Button */}
            <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                <motion.a
                    href={href}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '1rem 2.2rem',
                        background: 'var(--accent)',
                        color: '#000',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        borderRadius: '100px',
                        boxShadow: '0 0 30px rgba(200,169,81,0.35)',
                        transition: 'box-shadow 0.3s ease',
                        cursor: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(200,169,81,0.6)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(200,169,81,0.35)'}
                >
                    {buttonLabel}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.a>
                <p style={{
                    marginTop: '0.75rem',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: 'var(--font-sans)',
                    textAlign: 'center',
                }}>
                    {email}
                </p>
            </div>
        </motion.section>
    );
};

export default CTABanner;
