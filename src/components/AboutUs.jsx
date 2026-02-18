import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTABanner from './CTABanner';

const AboutUs = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <>
            <section className="asymmetric-section" style={{ paddingTop: '15vh' }}>
                {/* Header */}
                <div className="staggered-row left-heavy" style={{ marginBottom: '10rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="editorial-heading"
                        style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 0.9 }}
                    >
                        The Hudson <br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Vanguard.</span>
                    </motion.h2>
                </div>

                <div style={{ padding: '0 5vw', maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Narrative */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5vw', marginBottom: '15rem' }}>
                        <div style={{ paddingTop: '5rem' }}>
                            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '2rem' }}>01 / Origin</span>
                            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                                Founded in 2019, we set out to transform the staffing landscape. Not just to fill roles, but to engineer the architecture of future organizations.
                            </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.8, marginBottom: '2rem' }}>
                                We began our journey with a singular vision: to bridge the gap between elite talent and world-class enterprises. With a rich history of staffing experience, we have not only adapted but thrived in the ever-changing landscape of technological innovation.
                            </p>
                            <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.8 }}>
                                Our unique approach guarantees that your specific requirements are addressed with accuracy and experience. Whether you're a start-up aiming to grow or a global organization looking to improve efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Principles */}
                    <div style={{ marginBottom: '15rem', position: 'relative' }}>
                        <motion.div className="massive-text" style={{
                            y,
                            fontSize: '20vw',
                            position: 'absolute',
                            top: '-10vw',
                            left: '-5vw',
                            opacity: 0.05,
                            zIndex: -1,
                            pointerEvents: 'none'
                        }}>
                            ETHOS
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            {[
                                { t: "Honesty", d: "Transparency in every interaction." },
                                { t: "Quality", d: "Uncompromising standards of excellence." },
                                { t: "Dedication", d: " relentless pursuit of client success." },
                                { t: "Strategy", d: "Forward-thinking workforce planning." },
                                { t: "Outcome", d: "Results that drive measurable growth." },
                                { t: "Global", d: "Navigating talent across borders." }
                            ].map((item, i) => (
                                <div key={i} style={{ background: 'var(--bg-primary)', padding: '3rem', transition: 'background 0.3s' }} className="hover:bg-[#111]">
                                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>{item.t}</h4>
                                    <p style={{ fontSize: '1rem', opacity: 0.6 }}>{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leadership */}
                    <div>
                        <h3 className="editorial-heading" style={{ fontSize: '3rem', marginBottom: '6rem', textAlign: 'center' }}>Leadership</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                            {[
                                { name: "Mayank Doultani", role: "CEO & Co-Founder", desc: "A visionary leader with a deep-seated passion for hiring and personnel management. Mayank fosters a nurturing environment that encourages personal and professional growth." },
                                { name: "Vikas Singh", role: "COO & Co-Founder", desc: "Standing at the forefront of our mission to connect elite talent. Vikas brings an invaluable breadth of experience in the IT staffing industry." }
                            ].map((leader, i) => (
                                <div key={i} className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>{leader.name}</h4>
                                        <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', color: 'var(--accent)' }}>{leader.role}</p>
                                    </div>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.7 }}>{leader.desc}</p>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-20px',
                                        right: '-20px',
                                        fontSize: '10rem',
                                        fontFamily: 'var(--font-serif)',
                                        opacity: 0.05,
                                        lineHeight: 1
                                    }}>
                                        {i === 0 ? 'MD' : 'VS'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <CTABanner
                heading="Join the Hudson Vanguard"
                subtext="We're always looking for exceptional people to grow with us. Reach out and let's talk."
                buttonLabel="Work With Us"
                email="info@hudsonmanpower.com"
                subject="Careers at Hudson"
            />
        </>
    );
};

export default AboutUs;
