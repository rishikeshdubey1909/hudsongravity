import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
    return (
        <section className="asymmetric-section" style={{ paddingTop: '15vh' }}>
            <div className="staggered-row left-heavy" style={{ marginBottom: '10vh' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h2 className="editorial-heading" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.8 }}>
                        Core Dual <br /> Expertise
                    </h2>
                </motion.div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(4rem, 8vw, 10rem)',
                padding: '0 5vw'
            }}>
                {/* Workforce Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}
                >
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '2rem' }}>
                        01 // Workforce Solutions
                    </span>
                    <h3 className="editorial-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2.5rem', fontStyle: 'italic' }}>Licensed for Scale.</h3>
                    <p style={{ lineHeight: '1.6', opacity: 0.7, fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px', color: 'var(--text-secondary)' }}>
                        Government of India–issued recruitment license enabling overseas deployment of 1000+ candidates annually. Built for high-volume, high-stakes hiring and global mobilization.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {["Executive & Leadership Search", "Campaign-Based Trade Hiring", "Managed Compliance & Visas", "International Talent Alignment"].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i + 0.5 }}
                                className="hover-reveal"
                                style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', paddingBottom: '0.5rem', alignSelf: 'flex-start' }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technology Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}
                >
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '2rem' }}>
                        02 // Digital Engineering
                    </span>
                    <h3 className="editorial-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2.5rem' }}>Digital Evolution.</h3>
                    <p style={{ lineHeight: '1.6', opacity: 0.7, fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px', color: 'var(--text-secondary)' }}>
                        Engineering scalable web and mobile solutions. Strengthening recruitment and industrial operations through enterprise systems, automation, and AI-led workflows.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {["Enterprise Software Development", "AI & Workflow Automation", "Scalable Web & Mobile Apps", "Digital Infrastructure Strategy"].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i + 0.7 }}
                                className="hover-reveal"
                                style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', paddingBottom: '0.5rem', alignSelf: 'flex-start' }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating Accent */}
            <motion.div
                animate={{
                    y: [-20, 20],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    width: '400px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0.3
                }}
            />
        </section>
    );
};

export default WhatWeDo;
