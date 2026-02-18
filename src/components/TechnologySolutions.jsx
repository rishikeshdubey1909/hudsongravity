import React from 'react';
import { motion } from 'framer-motion';
import CTABanner from './CTABanner';

const TechnologySolutions = () => {
    const capabilities = [
        { t: "Custom Development", d: "Bespoke software solutions designed and developed to meet your unique business requirements and workflows." },
        { t: "Enterprise Applications", d: "Scalable enterprise-grade applications with robust architecture, security, and performance optimization." },
        { t: "Cloud Solutions", d: "Cloud-native applications, migration services, and infrastructure management for modern businesses." },
        { t: "Digital Transformation", d: "End-to-end digital transformation services to modernize your business processes and technology stack." }
    ];

    const solutions = [
        "Interactive Solutions", "Product Engineering", "Connected Enterprise",
        "Data & AI", "Data Management", "Application Management",
        "Network Services", "Data Engineering", "Analytics & BI",
        "Web Design & Development", "Enterprise Solutions", "Technology Consulting",
        "Cybersecurity", "Application Transformation", "Infrastructure Services"
    ];

    return (
        <>
            <section className="asymmetric-section" style={{ paddingTop: '15vh' }}>
                <div className="staggered-row right-heavy" style={{ marginBottom: '8rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ fontFamily: 'monospace', color: 'var(--accent)', marginBottom: '1rem' }}
                        >
                            &lt;system_core&gt;
                        </motion.div>
                        <h2 className="editorial-heading" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                            Enterprise <br /> Development.
                        </h2>
                    </div>
                </div>

                <div style={{ padding: '0 5vw', maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Capabilities Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '10rem' }}>
                        {capabilities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }} />
                                <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace', marginBottom: '1rem' }}>
                                    0{i + 1}__{item.t}
                                </h4>
                                <p style={{ opacity: 0.7, fontSize: '1rem', lineHeight: 1.6 }}>{item.d}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Solutions Terminal */}
                    <div>
                        <h3 className="editorial-heading" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
                            System Capabilities
                        </h3>

                        <div className="glass" style={{ padding: '4rem', position: 'relative' }}>
                            <div style={{
                                position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem'
                            }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                                {solutions.map((solution, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>&gt;</span>
                                        <span style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontFamily: 'monospace' }}>{solution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CTABanner
                heading="Ready to Transform Your Tech Stack?"
                subtext="From custom software to cloud architecture — our engineers deliver solutions built to scale."
                buttonLabel="Start a Project"
                email="info@hudsonmanpower.com"
                subject="Technology Solutions Inquiry"
            />
        </>
    );
};

export default TechnologySolutions;
