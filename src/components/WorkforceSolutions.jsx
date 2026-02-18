import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTABanner from './CTABanner';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const services = [
    {
        num: '01',
        title: 'Permanent Staffing',
        desc: 'We source, screen, and place top-tier professionals in permanent roles that align with your culture, goals, and growth trajectory.',
        tags: ['Executive Search', 'Mid-Level Hiring', 'Campus Recruitment'],
    },
    {
        num: '02',
        title: 'Contract & Temp Staffing',
        desc: 'Flexible workforce solutions for project-based needs, seasonal peaks, or interim leadership — deployed with speed and precision.',
        tags: ['Short-Term Contracts', 'Project Staffing', 'Interim Management'],
    },
    {
        num: '03',
        title: 'International Manpower',
        desc: 'We mobilize skilled talent across borders — managing visas, compliance, and logistics for seamless global deployments.',
        tags: ['Gulf Deployments', 'Cross-Border Hiring', 'Visa & Compliance'],
    },
    {
        num: '04',
        title: 'RPO & Managed Hiring',
        desc: 'End-to-end recruitment process outsourcing — we embed within your HR function to drive hiring at scale, with full accountability.',
        tags: ['Full-Cycle RPO', 'Employer Branding', 'ATS Management'],
    },
];

const industries = [
    { name: 'Oil & Gas', icon: '⚡' },
    { name: 'Engineering & Construction', icon: '🏗️' },
    { name: 'Power & Utility', icon: '🔋' },
    { name: 'Refinery & Petrochemical', icon: '🏭' },
    { name: 'Automobile & Auto Ancillary', icon: '🚗' },
    { name: 'EPC', icon: '🔧' },
    { name: 'Telecom', icon: '📡' },
    { name: 'Banking & Financial Services', icon: '🏦' },
    { name: 'Healthcare & Pharmaceuticals', icon: '🏥' },
    { name: 'Information Technology', icon: '💻' },
    { name: 'Outsourcing & Offshoring', icon: '🌐' },
    { name: 'Facility Management', icon: '🏢' },
    { name: 'FMCG', icon: '🛒' },
    { name: 'Media & Entertainment', icon: '🎬' },
    { name: 'Mining & Metals', icon: '⛏️' },
    { name: 'Services', icon: '🤝' },
    { name: 'Hospitality', icon: '🏨' },
];

const stats = [
    { value: '17+', label: 'Industries Served' },
    { value: '12+', label: 'Countries Reached' },
    { value: '5,000+', label: 'Placements Made' },
    { value: '98%', label: 'Client Retention' },
];

const WorkforceSolutions = () => {
    const [activeService, setActiveService] = useState(null);

    return (
        <>
            <section className="asymmetric-section" style={{ paddingTop: '12vh' }}>

                {/* ── Hero ── */}
                <div style={{ padding: '0 8vw', maxWidth: '1400px', margin: '0 auto 10rem' }}>
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
                        Workforce Solutions
                    </motion.p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', alignItems: 'end' }}>
                        <motion.h1
                            {...fadeUp(0.1)}
                            className="editorial-heading"
                            style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', lineHeight: 0.9 }}
                        >
                            The Right<br />
                            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>
                                People.
                            </span>
                        </motion.h1>

                        <motion.div {...fadeUp(0.2)}>
                            <p style={{
                                fontSize: '1.2rem',
                                opacity: 0.65,
                                lineHeight: 1.75,
                                fontFamily: 'var(--font-sans)',
                                marginBottom: '2.5rem',
                            }}>
                                We connect organizations with exceptional talent across 17+ industries and 12+ countries. From permanent placements to global deployments — we deliver the right people, at the right time.
                            </p>
                            <a
                                href="mailto:info@hudsonmanpower.com?subject=Workforce Inquiry"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '1rem 2rem',
                                    background: 'var(--accent)',
                                    color: '#000',
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    borderRadius: '100px',
                                    cursor: 'none',
                                }}
                            >
                                Start Hiring
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* ── Stats Bar ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        padding: '4rem 8vw',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '3rem',
                        marginBottom: '10rem',
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.08)}
                            style={{ textAlign: 'center' }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                color: 'var(--accent)',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                            }}>
                                {stat.value}
                            </p>
                            <p style={{
                                fontSize: '0.75rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                opacity: 0.45,
                                fontFamily: 'var(--font-sans)',
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Services ── */}
                <div style={{ padding: '0 8vw', maxWidth: '1400px', margin: '0 auto 12rem' }}>
                    <motion.h2
                        {...fadeUp(0)}
                        className="editorial-heading"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '5rem' }}
                    >
                        What We <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Deliver</span>
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {services.map((svc, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.08)}
                                onMouseEnter={() => setActiveService(i)}
                                onMouseLeave={() => setActiveService(null)}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr auto',
                                    alignItems: 'start',
                                    gap: '3rem',
                                    padding: '3rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                                    cursor: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {/* Number */}
                                <span style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.8rem',
                                    color: activeService === i ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                                    paddingTop: '0.4rem',
                                    transition: 'color 0.3s',
                                    letterSpacing: '0.1em',
                                }}>
                                    {svc.num}
                                </span>

                                {/* Content */}
                                <div>
                                    <h3 style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                                        marginBottom: '1rem',
                                        color: activeService === i ? '#fff' : 'rgba(255,255,255,0.85)',
                                        transition: 'color 0.3s',
                                    }}>
                                        {svc.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                        color: 'rgba(255,255,255,0.5)',
                                        fontFamily: 'var(--font-sans)',
                                        maxWidth: '560px',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {svc.desc}
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {svc.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                padding: '0.35rem 0.9rem',
                                                border: `1px solid ${activeService === i ? 'rgba(200,169,81,0.5)' : 'rgba(255,255,255,0.1)'}`,
                                                borderRadius: '100px',
                                                color: activeService === i ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                                                fontFamily: 'var(--font-sans)',
                                                transition: 'all 0.3s',
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div style={{
                                    paddingTop: '0.4rem',
                                    opacity: activeService === i ? 1 : 0,
                                    transform: activeService === i ? 'translateX(0)' : 'translateX(-8px)',
                                    transition: 'all 0.3s ease',
                                    color: 'var(--accent)',
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Industries ── */}
                <div style={{ padding: '0 8vw', maxWidth: '1400px', margin: '0 auto 8rem' }}>
                    <motion.div
                        {...fadeUp(0)}
                        style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}
                    >
                        <h2 className="editorial-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Spanning <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Sectors</span>
                        </h2>
                        <p style={{ fontSize: '1rem', opacity: 0.5, fontFamily: 'var(--font-sans)', maxWidth: '380px', lineHeight: 1.6 }}>
                            Our expertise isn't limited by geography or industry vertical. We operate across every sector that drives the global economy.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '1px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}>
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ background: 'rgba(200,169,81,0.07)' }}
                                style={{
                                    padding: '2rem 1.8rem',
                                    background: 'var(--bg-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    cursor: 'none',
                                    transition: 'background 0.3s',
                                }}
                            >
                                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{industry.icon}</span>
                                <span style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.75)',
                                    lineHeight: 1.3,
                                }}>
                                    {industry.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>

            <CTABanner
                heading="Let's Build Your Workforce Together"
                subtext="We deploy specialized talent across 17+ industries globally. Tell us what you need."
                buttonLabel="Start Hiring"
                email="info@hudsonmanpower.com"
                subject="Workforce Staffing Inquiry"
            />
        </>
    );
};

export default WorkforceSolutions;
