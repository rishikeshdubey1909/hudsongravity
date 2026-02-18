import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section
            ref={containerRef}
            className="asymmetric-section"
            style={{
                position: 'relative',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 0
            }}
        >
            {/* Background Atmosphere */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '80vw',
                    height: '80vw',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(5, 5, 5, 0) 60%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: -1,
                    x: '-50%',
                    y: '-50%',
                    scale
                }}
            />

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1
                        className="massive-text"
                        initial={{ y: "100%", skewY: 5 }}
                        animate={{ y: 0, skewY: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            lineHeight: 0.85,
                            color: 'var(--text-primary)',
                            marginBottom: '-0.1em'
                        }}
                    >
                        Gravity
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        height: '1px',
                        background: 'rgba(255,255,255,0.1)',
                        width: '40vw',
                        margin: '2rem auto'
                    }}
                />

                <div style={{ overflow: 'hidden' }}>
                    <motion.h1
                        className="massive-text"
                        initial={{ y: "100%", skewY: 5 }}
                        animate={{ y: 0, skewY: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            lineHeight: 0.85,
                            color: 'transparent',
                            WebkitTextStroke: '1px var(--text-primary)',
                            opacity: 0.5
                        }}
                    >
                        Defined
                    </motion.h1>
                </div>
            </div>

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '10vh',
                    left: '5vw',
                    maxWidth: '400px',
                    opacity,
                    y
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.7rem', color: 'var(--accent)' }}>Established 1996</span>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    Engineering the future workforce for Oil & Gas, Technology, and Hospitality. Global reach, precision execution.
                </p>
            </motion.div>

        </section>
    );
};

export default Hero;
