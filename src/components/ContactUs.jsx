import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const ContactUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const ctaCards = [
        {
            id: 'client',
            label: '01 / For Clients',
            heading: 'Looking to Hire?',
            subtext: "Tell us about your workforce or technology needs. We'll match you with the right talent — fast.",
            buttonLabel: 'Email Our Team',
            email: 'info@hudsonmanpower.com',
            subject: 'Client Inquiry',
            accent: '#c8a951',
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 10l12 8 12-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 'candidate',
            label: '02 / For Candidates',
            heading: 'Ready to Grow?',
            subtext: 'Submit your CV and let our recruiters connect you with world-class opportunities across the globe.',
            buttonLabel: 'Submit Your CV',
            email: 'career@hudsonmanpower.com',
            subject: 'CV Submission',
            accent: '#f59e0b',
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
        },
    ];

    const offices = [
        {
            country: 'USA',
            flag: '🇺🇸',
            address: '221 River St, Suite 09\nHoboken, NJ 07030',
            phone: '+1 (551) 277-2955',
        },
        {
            country: 'India',
            flag: '🇮🇳',
            address: 'Jay Vijay Nagar\nMumbai 401208',
            phone: '+91 80874 51874',
        },
    ];

    return (
        <section className="asymmetric-section" style={{ paddingTop: '12vh', paddingBottom: '8vh' }}>

            {/* ── Hero ── */}
            <div style={{ padding: '0 8vw', maxWidth: '1400px', margin: '0 auto', marginBottom: '8rem' }}>
                <motion.p
                    {...fadeUp(0)}
                    style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-sans)',
                        marginBottom: '1.5rem',
                    }}
                >
                    Get in Touch
                </motion.p>
                <motion.h1
                    {...fadeUp(0.1)}
                    className="editorial-heading"
                    style={{
                        fontSize: 'clamp(4rem, 10vw, 9rem)',
                        lineHeight: 0.88,
                        marginBottom: '2.5rem',
                    }}
                >
                    Let's Build<br />
                    <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>
                        Something Great.
                    </span>
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    style={{
                        fontSize: '1.2rem',
                        opacity: 0.6,
                        maxWidth: '520px',
                        lineHeight: 1.7,
                        fontFamily: 'var(--font-sans)',
                    }}
                >
                    Whether you're a company looking for elite talent or a professional seeking your next opportunity — we're here to make it happen.
                </motion.p>
            </div>

            {/* ── CTA Cards ── */}
            <div style={{
                padding: '0 8vw',
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginBottom: '8rem',
            }}>
                {ctaCards.map((card, i) => (
                    <motion.a
                        key={card.id}
                        href={`mailto:${card.email}?subject=${encodeURIComponent(card.subject)}`}
                        {...fadeUp(0.1 + i * 0.12)}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            padding: '3.5rem',
                            borderRadius: '16px',
                            border: `1px solid ${hoveredCard === card.id ? card.accent : 'rgba(255,255,255,0.08)'}`,
                            background: hoveredCard === card.id
                                ? `linear-gradient(135deg, rgba(${card.id === 'client' ? '200,169,81' : '245,158,11'},0.1) 0%, rgba(0,0,0,0) 100%)`
                                : 'rgba(255,255,255,0.03)',
                            transition: 'all 0.4s ease',
                            cursor: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Glow on hover */}
                        <div style={{
                            position: 'absolute',
                            top: '-40px',
                            right: '-40px',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
                            opacity: hoveredCard === card.id ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            pointerEvents: 'none',
                        }} />

                        {/* Label */}
                        <p style={{
                            fontSize: '0.7rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: card.accent,
                            fontFamily: 'var(--font-sans)',
                            marginBottom: '2rem',
                        }}>
                            {card.label}
                        </p>

                        {/* Icon */}
                        <div style={{ color: card.accent, marginBottom: '1.5rem' }}>
                            {card.icon}
                        </div>

                        {/* Heading */}
                        <h2 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                            color: '#fff',
                            fontWeight: 400,
                        }}>
                            {card.heading}
                        </h2>

                        {/* Subtext */}
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            color: 'rgba(255,255,255,0.5)',
                            fontFamily: 'var(--font-sans)',
                            marginBottom: '2.5rem',
                        }}>
                            {card.subtext}
                        </p>

                        {/* Button row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.85rem 1.8rem',
                                background: card.accent,
                                color: '#000',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                borderRadius: '100px',
                                transition: 'transform 0.2s ease',
                                transform: hoveredCard === card.id ? 'scale(1.04)' : 'scale(1)',
                            }}>
                                {card.buttonLabel}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'rgba(255,255,255,0.3)',
                                fontFamily: 'var(--font-sans)',
                            }}>
                                {card.email}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* ── Divider ── */}
            <div style={{ padding: '0 8vw', maxWidth: '1400px', margin: '0 auto 6rem' }}>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
            </div>

            {/* ── Offices + Direct Contact ── */}
            <div style={{
                padding: '0 8vw',
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
            }}>
                {/* Direct emails */}
                <motion.div {...fadeUp(0)}>
                    <p style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-sans)',
                        marginBottom: '2rem',
                    }}>
                        Direct Lines
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {[
                            { label: 'General & Clients', email: 'info@hudsonmanpower.com' },
                            { label: 'Careers & Candidates', email: 'career@hudsonmanpower.com' },
                            { label: 'Support', email: 'support@hudsonmanpower.com' },
                        ].map(({ label, email }) => (
                            <div key={email}>
                                <p style={{ fontSize: '0.7rem', opacity: 0.4, fontFamily: 'var(--font-sans)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                                <a
                                    href={`mailto:${email}`}
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '1.1rem',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                                >
                                    {email}
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Offices */}
                {offices.map((office, i) => (
                    <motion.div key={office.country} {...fadeUp(0.1 + i * 0.1)}>
                        <p style={{
                            fontSize: '0.7rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-sans)',
                            marginBottom: '2rem',
                        }}>
                            {office.flag} {office.country} Office
                        </p>
                        <p style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            color: 'rgba(255,255,255,0.7)',
                            whiteSpace: 'pre-line',
                            marginBottom: '1rem',
                        }}>
                            {office.address}
                        </p>
                        <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            style={{
                                color: 'var(--accent)',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                fontWeight: 600,
                            }}
                        >
                            {office.phone}
                        </a>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default ContactUs;
