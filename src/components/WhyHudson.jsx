import React from 'react';
import { motion } from 'framer-motion';

const whyData = [
    { title: "Licensed for Scale", desc: "Government of India–issued recruitment license enabling overseas deployment of 1000+ candidates annually." },
    { title: "Managed Compliance", desc: "End-to-end handling of visa processing, medicals, and documentation for seamless global deployment." },
    { title: "Talent Alignment", desc: "International talent sourcing aligned with local market regulations and specific project realities." },
    { title: "Backed Delivery", desc: "Digital systems and AI-led workflows ensuring predictable outcomes and operational excellence." },
    { title: "Partnership Mindset", desc: "Operating as a long-term strategic partner in your growth, not just a transactional vendor." }
];

const WhyHudson = () => {
    return (
        <section className="asymmetric-section" style={{ paddingTop: '15vh' }}>
            <div className="staggered-row right-heavy" style={{ marginBottom: '12vh' }}>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h2 className="editorial-heading" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textAlign: 'right' }}>
                        The Global <br /> <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>Standard</span>
                    </h2>
                </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', padding: '0 5vw' }}>
                {whyData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        style={{
                            borderLeft: '1px solid var(--accent)',
                            paddingLeft: '2.5rem',
                            paddingTop: '1rem',
                            paddingBottom: '2rem',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
                        }}
                    >
                        <h4 style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.7rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            {item.title}
                        </h4>
                        <p style={{
                            fontSize: '1.1rem',
                            fontFamily: 'var(--font-serif)',
                            lineHeight: 1.4,
                            color: 'var(--text-primary)',
                            opacity: 0.9
                        }}>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Cinematic Industry Ticker */}
            <div style={{
                marginTop: '20vh',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '5vh 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                background: 'rgba(0,0,0,0.5)',
                color: 'var(--text-secondary)'
            }}>
                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ display: 'inline-block' }}
                >
                    {[1, 2, 3].map((_, i) => (
                        <span key={i} style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', paddingRight: '6rem', letterSpacing: '0.05em', opacity: 0.5 }}>
                            Energy • Oil & Gas • EPC • Construction • Hospitality • IT • Healthcare • Financial Services • Transportation •
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHudson;
