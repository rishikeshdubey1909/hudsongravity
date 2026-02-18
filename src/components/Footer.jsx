import React from 'react';

const Footer = ({ setView }) => {
    return (
        <footer style={{
            background: '#050508',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'var(--font-sans)',
        }}>
            {/* Blue glow edges */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(30, 80, 255, 0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, rgba(30, 80, 255, 0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Dot grid pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Top section: logo/tagline + nav links */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '60px 8vw 48px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '40px',
                alignItems: 'flex-start',
            }}>
                {/* Left: Logo + tagline + LinkedIn */}
                <div>
                    <div style={{ marginBottom: '16px' }}>
                        {/* Hudson logo text */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '14px',
                        }}>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="38" height="38" rx="4" fill="#0a0a14" />
                                <text x="4" y="28" fontFamily="serif" fontSize="26" fontWeight="700" fill="white">H</text>
                            </svg>
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em', lineHeight: 1.1 }}>HUDSON</div>
                                <div style={{ color: '#888', fontSize: '0.6rem', letterSpacing: '0.04em', lineHeight: 1.2 }}>Information Technology &amp; Manpower Services</div>
                            </div>
                        </div>
                    </div>
                    <p style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                        maxWidth: '260px',
                    }}>
                        Global workforce solutions for Oil &amp; Gas, IT, and Hospitality industries.
                    </p>
                    {/* LinkedIn icon */}
                    <a
                        href="https://www.linkedin.com/company/hudson-manpower"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.color = '#0A66C2'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>

                {/* Middle: Services links */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-sans)',
                    }}>
                        Services
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { label: 'Workforce Solutions', view: 'workforce' },
                            { label: 'Technology Solutions', view: 'technology' },
                            { label: 'Careers', view: 'careers' },
                            { label: 'Submit CV', view: 'submit-cv' },
                        ].map(link => (
                            <li key={link.label}>
                                <button
                                    onClick={() => setView && setView(link.view)}
                                    style={{
                                        background: 'none', border: 'none', padding: 0,
                                        color: 'rgba(255,255,255,0.6)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.2s',
                                        display: 'inline-block',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-sans)',
                                        textAlign: 'left',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Company links */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-sans)',
                    }}>
                        Company
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { label: 'About Us', view: 'about' },
                            { label: 'Contact Us', view: 'contact' },
                        ].map(link => (
                            <li key={link.label}>
                                <button
                                    onClick={() => setView && setView(link.view)}
                                    style={{
                                        background: 'none', border: 'none', padding: 0,
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.2s',
                                        display: 'inline-block',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-sans)',
                                        textAlign: 'left',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                margin: '0 8vw',
            }} />

            {/* Contact grid */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '48px 8vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '32px',
            }}>
                {/* EMAIL */}
                <div>
                    <div style={{
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>EMAIL</div>
                    <a href="mailto:info@hudsonmanpower.com" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                        info@hudsonmanpower.com
                    </a>
                    <a href="mailto:support@hudsonmanpower.com" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                        support@hudsonmanpower.com<br />
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>(IT Support)</span>
                    </a>
                </div>

                {/* PHONE */}
                <div>
                    <div style={{
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>PHONE</div>
                    {[
                        { num: '+1 (551) 277-2955', label: 'USA', href: 'tel:+15512772955' },
                        { num: '+1 (551) 800-3255', label: 'USA', href: 'tel:+15518003255' },
                        { num: '+91 80874 51874', label: 'India', href: 'tel:+918087451874' },
                    ].map(p => (
                        <a key={p.href} href={p.href} style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                            {p.num} <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>({p.label})</span>
                        </a>
                    ))}
                </div>

                {/* USA OFFICE */}
                <div>
                    <div style={{
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>USA OFFICE</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                        221 River St, Suite 09<br />
                        Hoboken, NJ 07030<br />
                        US
                    </p>
                </div>

                {/* INDIA OFFICE */}
                <div>
                    <div style={{
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>INDIA OFFICE</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                        Jay Vijay Nagar, B wing, Ground Floor<br />
                        Naigaon (East), Mumbai 401208<br />
                        IN
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                margin: '0 8vw',
            }} />

            {/* Bottom bar: copyright + tagline */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '24px 8vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
            }}>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
                    © 2026 Hudson Information Technology &amp; Manpower Services. All rights reserved.
                </span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>
                    Built with <span style={{ color: '#e05252' }}>❤️</span> for global workforce solutions
                </span>
            </div>
        </footer>
    );
};

export default Footer;
