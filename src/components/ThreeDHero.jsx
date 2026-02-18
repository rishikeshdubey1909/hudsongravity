
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
import CTABanner from './CTABanner';

const Globe = () => {
    const globeRef = useRef();

    // Generate random points on sphere surface
    const points = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 1500; i++) {
            const phi = Math.acos(-1 + (2 * i) / 1500);
            const theta = Math.sqrt(1500 * Math.PI) * phi;
            const x = 5 * Math.cos(theta) * Math.sin(phi);
            const y = 5 * Math.sin(theta) * Math.sin(phi);
            const z = 5 * Math.cos(phi);
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, []);

    // Generate connections between points
    const connections = useMemo(() => {
        const lines = [];
        for (let i = 0; i < 100; i++) {
            const start = points[Math.floor(Math.random() * points.length)];
            const end = points[Math.floor(Math.random() * points.length)];

            // Create a curve
            const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(7);
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            lines.push(curve.getPoints(20));
        }
        return lines;
    }, [points]);

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={globeRef}>
            {/* Core Sphere */}
            <Sphere args={[5, 64, 64]}>
                <meshPhongMaterial
                    color="#2a1a0a"
                    emissive="#1a0b00"
                    specular="#fbbf24"
                    shininess={20}
                    transparent
                    opacity={0.9}
                />
            </Sphere>

            {/* Glowing Atmosphere */}
            <Sphere args={[5.1, 64, 64]}>
                <meshBasicMaterial
                    color="#f59e0b"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Points */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length}
                        array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.04}
                    color="#fbbf24"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>

            {/* Connections */}
            {connections.map((linePoints, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={linePoints.length}
                            array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial color="#d97706" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
                </line>
            ))}
        </group>
    );
};

const ThreeDHero = () => {
    return (
        <>
            <section style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                background: 'linear-gradient(135deg, #1a0800 0%, #7c2d12 50%, #b45309 100%)', // Deep Orange to Amber/Yellow
                overflow: 'hidden'
            }}>

                <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.8 }}>
                    <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
                        <ambientLight intensity={0.5} color="#fed7aa" />
                        <pointLight position={[10, 10, 10]} intensity={1.5} color="#f59e0b" />
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
                        <Globe />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
                    </Canvas>
                </div>

                <div className="hero-content" style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    textAlign: 'center'
                }}>
                    <h1 className="editorial-heading" style={{
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        lineHeight: 1,
                        marginBottom: '2rem',
                        mixBlendMode: 'screen',
                        color: '#fff',
                        textShadow: '0 0 40px rgba(245, 158, 11, 0.6)'
                    }}>
                        Where Talent Meets <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#fbbf24' }}>Technology</span>
                    </h1>

                    <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        opacity: 0.9,
                        lineHeight: 1.6,
                        color: '#fff7ed'
                    }}>
                        Connecting elite talent with world-class enterprises across borders.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: 0.8
                }}>
                    <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #f59e0b, transparent)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f59e0b' }}>Touch Down</span>
                </div>

            </section>
            <CTABanner
                heading="Ready to Scale Your Workforce?"
                subtext="Connect with our team to find the right talent or your next career opportunity."
                buttonLabel="Contact Us Now"
                email="info@hudsonmanpower.com"
                subject="Workforce Inquiry"
            />
        </>
    );
};

export default ThreeDHero;
