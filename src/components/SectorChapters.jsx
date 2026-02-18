import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
    {
        title: "Oil & Gas",
        subtitle: "Upstream to Downstream",
        description: "Specializing in recruitment for exploration, production, and energy management. Expert engineers and field technicians compliant with HSE standards.",
        tagline: "Energy Excellence"
    },
    {
        title: "Technology",
        subtitle: "Elite Digital Talent",
        description: "Sourcing top-tier software developers, cloud architects, and DevOps engineers for enterprise technology projects. Agile teams built for digital transformation.",
        tagline: "Digital Mastery"
    },
    {
        title: "Hospitality",
        subtitle: "Luxury Service Standard",
        description: "Curating skilled hospitality professionals, chefs, and service staff for hotels and restaurants. Delivering seasonal and permanent excellence worldwide.",
        tagline: "Elite Service"
    },
    {
        title: "Healthcare",
        subtitle: "Medical & Biotech",
        description: "Catering to medical services and healthcare administration with a focus on expertise and compassionate care across the GCC and international borders.",
        tagline: "Critical Care"
    }
];

const ChapterCard = ({ chapter, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0,
                opacity
            }}
        >
            <div className="glass" style={{
                padding: '4rem',
                maxWidth: '900px',
                width: '90%',
                background: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'grid',
                gridTemplateColumns: 'min-content 1fr',
                gap: '4rem',
                alignItems: 'start'
            }}>
                <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: '1rem', height: '100%' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>0{index + 1}</span>
                    <div style={{ flex: 1, width: '1px', background: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{chapter.tagline}</span>
                </div>

                <div>
                    <h2 className="editorial-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem' }}>
                        {chapter.title}
                    </h2>
                    <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic', marginBottom: '2rem' }}>
                        {chapter.subtitle}
                    </p>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', marginBottom: '3rem' }}>
                        {chapter.description}
                    </p>

                    <button className="hover-reveal" style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.9rem',
                        paddingBottom: '0.5rem'
                    }}>
                        Explore Access
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const SectorChapters = () => {
    return (
        <section className="asymmetric-section" style={{ padding: '0', position: 'relative' }}>
            <div style={{ position: 'sticky', top: '10vh', padding: '0 5vw', marginBottom: '10vh', zIndex: 10, mixBlendMode: 'difference' }}>
                <h3 className="editorial-heading" style={{ fontSize: '1.5rem', opacity: 0.5 }}>Core Divisions</h3>
            </div>

            <div style={{ paddingBottom: '20vh' }}>
                {chapters.map((chapter, index) => (
                    <ChapterCard key={index} chapter={chapter} index={index} />
                ))}
            </div>
        </section>
    );
};

export default SectorChapters;
