import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CareersAndContact = () => {
    return (
        <>
            {/* Careers Section - Editorial Spread Style */}
            <section className="asymmetric-section" style={{ paddingTop: '20vh' }}>
                <div className="staggered-row left-heavy">
                    <div style={{ maxWidth: '1000px', position: 'relative' }}>
                        <motion.h2
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="editorial-heading"
                            style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', fontWeight: 300, lineHeight: 0.8 }}
                        >
                            JOIN THE <br /> <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>DEFIANCE</span>
                        </motion.h2>

                        <div style={{ display: 'flex', gap: '5vw', marginTop: '10vh', alignItems: 'flex-start' }}>
                            <motion.div
                                style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.4, opacity: 0.7, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                                    We disrupt corporate norms in workforce deployment. Seekers of excellence, intelligence, and rebellious engineering.
                                </p>
                            </motion.div>

                            <motion.div
                                style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <a href="mailto:info@hudsonmanpower.com" className="hover-reveal" style={{
                                    color: 'var(--accent)',
                                    textDecoration: 'none',
                                    fontSize: '2rem',
                                    fontFamily: 'var(--font-serif)',
                                    fontStyle: 'italic',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    info@hudsonmanpower.com <ArrowUpRight size={32} strokeWidth={1} />
                                </a>
                                <span style={{ fontSize: '0.9rem', opacity: 0.4, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                                    USA: +1 (551) 277-2955 • INDIA: +91 80874 51874
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Finale */}
            <section className="asymmetric-section" id="inquiry" style={{ paddingBottom: '10vh' }}>
                <div className="staggered-row right-heavy" style={{ marginBottom: '10vh' }}>
                    <h2 className="editorial-heading" style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', textAlign: 'right' }}>
                        Start the <br /> <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Dialogue</span>
                    </h2>
                </div>

                <div style={{ padding: '0 5vw', maxWidth: '800px', marginLeft: 'auto' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.5, color: 'var(--text-secondary)' }}>Identity</label>
                                <input type="text" placeholder="Full Name" style={{
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                    padding: '1.5rem 0',
                                    fontSize: '1.2rem',
                                    outline: 'none',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--text-primary)'
                                }} />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.5, color: 'var(--text-secondary)' }}>Vector</label>
                                <input type="email" placeholder="Communication Email" style={{
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                    padding: '1.5rem 0',
                                    fontSize: '1.2rem',
                                    outline: 'none',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--text-primary)'
                                }} />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <label style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.5, color: 'var(--text-secondary)' }}>Specialization</label>
                            <select style={{
                                background: 'none',
                                border: 'none',
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                                padding: '1.5rem 0',
                                fontSize: '1.2rem',
                                outline: 'none',
                                fontFamily: 'var(--font-serif)',
                                appearance: 'none',
                                color: 'var(--text-primary)'
                            }}>
                                <option style={{ background: 'var(--bg-secondary)' }}>Oil & Gas Staffing</option>
                                <option style={{ background: 'var(--bg-secondary)' }}>US IT & Technology</option>
                                <option style={{ background: 'var(--bg-secondary)' }}>Hospitality Services</option>
                                <option style={{ background: 'var(--bg-secondary)' }}>Healthcare Staffing</option>
                            </select>
                        </div>

                        <button type="submit" style={{
                            alignSelf: 'flex-start',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            border: 'none',
                            padding: '1.5rem 5rem',
                            fontSize: '0.8rem',
                            letterSpacing: '0.3em',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                            onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'var(--text-primary)'; e.target.style.color = 'var(--bg-primary)'; }}
                        >
                            Initiate
                        </button>
                    </form>
                </div>

                {/* Footer Editorial Sign-off */}
                <div style={{ marginTop: '20vh', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '5vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '5vw', paddingRight: '5vw' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', opacity: 0.5, color: 'var(--text-secondary)' }}>
                        Hudson Information Technology & Manpower Services © 2026.
                    </div>
                    <div style={{ display: 'flex', gap: '4rem', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        <span>USA: +1 (551) 800-3255</span>
                        <span>INDIA: +91 80874 51874</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersAndContact;
