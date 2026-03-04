import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = ({ onOpenProject }) => {
    const projects = [
        {
            title: 'ELASTIC',
            desc: 'Scale dynamically with AI-driven flexibility.',
            longDesc: 'Elastic is a revolutionary iOS application designed for dynamic scaling using local AI. It leverages on-device processing to provide unmatched speed and privacy for power users.',
            tag: 'iOS App | Cloud Integration',
            grid: 'span 6',
            color: 'rgba(0, 163, 255, 0.1)',
            tech: ['SwiftUI', 'CoreML', 'CloudKit', 'Local LLMs'],
            features: ['Real-time AI scaling', 'Encrypted data sync', 'Offline first architecture']
        },
        {
            title: 'FOCUSBAR',
            desc: 'Boost productivity & eliminate distractions.',
            longDesc: 'FocusBar is a minimalist macOS and iOS productivity tool that uses AI to detect distractions and help you stay in the flow. Built with local AI to ensure your data never leaves your device.',
            tag: 'macOS + iOS | AI Assist',
            grid: 'span 3',
            color: 'rgba(255, 120, 0, 0.1)',
            tech: ['AppKit', 'SwiftUI', 'Vision Framework'],
            features: ['Intent recognition', 'Smart notifications', 'Focus analytics']
        },
        {
            title: 'WELLNESSFORGE',
            desc: 'Holistic health tracking using local AI.',
            longDesc: 'A comprehensive wellness platform that integrates with HealthKit to provide deep insights into your physical and mental well-being using advanced on-device analytics.',
            tag: 'iOS App | HealthKit',
            grid: 'span 3',
            color: 'rgba(76, 217, 100, 0.1)',
            tech: ['HealthKit', 'CoreData', 'TabularData'],
            features: ['Biometric trends', 'Private health coaching', 'Activity automation']
        },
        {
            title: 'DIGITAL FRONTIER',
            desc: 'Independent engineering of NFT ecosystems.',
            longDesc: 'Solo-engineered Web3 ecosystems including the Pixelated Artefacts Brit Ape Club. Developed smart contracts, minting engines, and community dApps on Ethereum and Solana.',
            tag: '100% Solo | Web3 | dApps',
            grid: 'span 8',
            color: 'rgba(168, 85, 247, 0.1)',
            tech: ['Solidity', 'Rust', 'React', 'Ethers.js'],
            features: ['Custom ERC-721 contracts', 'Gas-optimized minting', 'Cross-chain bridges']
        },
        {
            title: 'STUDIO STATUS',
            desc: 'Online & taking new projects.',
            tag: 'Available Now',
            grid: 'span 4',
            status: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <section id="projects" style={{ padding: '4rem 0' }}>
            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="glass-card"
                        onClick={() => onOpenProject(p)}
                        style={{
                            gridColumn: p.grid,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderLeft: p.color ? `4px solid ${p.color.replace('0.1', '1')}` : 'none'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>{p.title}</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>{p.desc}</p>
                        </div>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '600' }}>{p.tag}</span>
                            {p.status && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#4CD964' }}>
                                    <span style={{ width: 8, height: 8, background: '#4CD964', borderRadius: '50%', boxShadow: '0 0 10px #4CD964' }}></span>
                                    Online
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default BentoGrid;
