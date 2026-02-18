import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTABanner from './CTABanner';

const Careers = () => {
    const [filter, setFilter] = useState('All');

    const jobs = [
        { title: "Secretary to General Manager", location: "Doha, Qatar", type: "Engineering & Construction" },
        { title: "Assistant / Safety Officer", location: "Riyadh, Saudi Arabia", type: "Engineering & Construction" },
        { title: "Auto Mechanic", location: "Ras Al Khair, Saudi Arabia", type: "Engineering & Construction" },
        { title: "Billing Engineer", location: "Kutch, India", type: "Engineering & Construction" },
        { title: "Business Development Manager", location: "Al Hisu, Saudi Arabia", type: "Engineering & Construction" },
        { title: "Civil Engineer – OHTL", location: "Ras Al-Khair, Saudi Arabia", type: "Engineering & Construction" },
        { title: "Android Developer", location: "Alaska, US", type: "Information Technology" },
        { title: "AWS AI Engineer", location: "San Jose, CA, US", type: "Information Technology" },
        { title: "C# Developer", location: "Redmond, WA, US", type: "Information Technology" },
        { title: "Data Architect", location: "Cincinnati, OH, US", type: "Information Technology" },
        { title: "Cyber Risk Analyst", location: "Cincinnati, OH, US", type: "Information Technology" },
        { title: "Assistant Waiter", location: "Mumbai, India / Kuwait", type: "Hospitality" },
        { title: "Head Chef", location: "Kuwait City, Kuwait", type: "Hospitality" },
        { title: "Service Crew Member", location: "Kuwait City, Kuwait", type: "Hospitality" }
    ];

    const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.type === filter);
    const categories = ['All', ...new Set(jobs.map(job => job.type))];

    return (
        <>
            <section className="asymmetric-section" style={{ paddingTop: '15vh' }}>
                <div className="staggered-row left-heavy" style={{ marginBottom: '8vh' }}>
                    <h2 className="editorial-heading" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>Join the <br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Vanguard.</span></h2>
                </div>

                <div style={{ padding: '0 5vw', maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Intro & Testimonials */}
                    <div style={{ marginBottom: '8rem', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '5rem' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                We are committed to fostering a professional environment where talent can grow and thrive. Build your legacy with Hudson.
                            </p>
                            <a href="mailto:tp.numbr@hudsonmanpower.recruitee.com" className="hover-reveal" style={{
                                display: 'inline-block',
                                paddingBottom: '5px',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--accent)',
                                fontWeight: 600
                            }}>
                                Submit Your CV
                            </a>
                        </div>

                        <div className="glass" style={{ padding: '3rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                <div>
                                    <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', opacity: 0.9, marginBottom: '1rem' }}>"Hudson IT helped me start my career in Android development and for that I will always be grateful."</p>
                                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>Android Developer</p>
                                </div>
                                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                                    <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', opacity: 0.9, marginBottom: '1rem' }}>"Thank you Hudson IT for the opportunity you gave me and for trusting me in such an important project."</p>
                                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Board */}
                    <div>
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: filter === cat ? 'var(--accent)' : 'var(--text-secondary)',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <AnimatePresence mode='popLayout'>
                                {filteredJobs.map((job, i) => (
                                    <motion.div
                                        key={i}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            padding: '2rem 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            display: 'grid',
                                            gridTemplateColumns: '2fr 1fr 1fr',
                                            alignItems: 'center',
                                            gap: '2rem'
                                        }}
                                        className="hover-reveal"
                                    >
                                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{job.title}</h4>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{job.location}</p>
                                        <div style={{ justifySelf: 'end' }}>
                                            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>{job.type}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>
            <CTABanner
                heading="Don't See Your Role? Apply Anyway."
                subtext="We're always on the lookout for exceptional talent. Send us your CV and we'll find the right fit."
                buttonLabel="Submit Your CV"
                subject="CV Submission"
            />
        </>
    );
};

export default Careers;
