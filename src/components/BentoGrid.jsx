import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = ({ onOpenProject }) => {
    const projects = [
        {
            title: 'ELASTICAPP',
            desc: 'ADHD habit tracker designed for flexibility.',
            longDesc: 'The first habit tracker designed specifically for the ADHD mind, built on the philosophy that consistency isn\'t about being perfect—it\'s about being flexible. Most habit trackers shame you for breaking streaks; Elastic encourages you to adjust based on your daily energy levels.',
            tag: 'ADHD Habit Tracker | iOS App',
            grid: 'span 6',
            color: 'rgba(0, 163, 255, 0.1)',
            tech: ['SwiftUI', 'CoreData', 'Local Notifications', 'ADHD UX'],
            features: ['Flexible habit scaling', 'Streak pressure elimination', '100% Private & Offline'],
            url: 'https://apps.apple.com/us/app/elasticapp/id6759823380'
        },
        {
            title: 'WELLNESSFORGE',
            desc: 'Intelligent wellness companion and HealthKit dashboard.',
            longDesc: 'An intelligent wellness companion that turns your real-time biometric data into personalized, actionable guidance every single day. Pulls steps, active calories, heart rate, sleep, and nutrition directly from HealthKit and updates in real time.',
            tag: 'Health & Fitness | iOS App',
            grid: 'span 6',
            color: 'rgba(46, 204, 113, 0.1)',
            tech: ['SwiftUI', 'HealthKit', 'CoreML', 'ARKit'],
            features: ['Daily Oracle & wellness readings', 'AI Meal Scanner (Pro)', 'AR Workout Guide (Pro)', 'Background Sync'],
            url: 'https://apps.apple.com/us/app/wellnessforge/id6759639691'
        },
        {
            title: 'SMARTSUBTRACKER',
            desc: 'Track subscriptions and budget limitations.',
            longDesc: 'A sleek tool to keep track of your subscriptions and notify you when due dates approach. Supports USD/GBP, monthly or annual cycles, and outputs a clear breakdown of monthly payments to help you manage your budget and spending.',
            tag: 'Finance & Budget | iOS App',
            grid: 'span 4',
            color: 'rgba(243, 156, 18, 0.1)',
            tech: ['SwiftUI', 'UserNotifications', 'CoreData', 'Locale API'],
            features: ['Dual currency support (USD/GBP)', 'Due date push alerts', 'Clear monthly breakdown', 'Offline database'],
            url: 'https://apps.apple.com/us/app/smartsubtracker/id6759440837'
        },
        {
            title: 'NOTES2QUOTE',
            desc: 'Generate quotes and invoices in seconds.',
            longDesc: 'A professional business utility that generates quotes and invoices instantly from notes, business cards, dictation, or manual text. Features a customizable profile for the self-employed, multi-currency support ($/£/€), and PDF sharing.',
            tag: 'Productivity & Business | iOS App',
            grid: 'span 4',
            color: 'rgba(155, 89, 182, 0.1)',
            tech: ['SwiftUI', 'PDFKit', 'Speech Recognition', 'MailKit'],
            features: ['Rapid PDF invoice generation', 'Notes & Dictation OCR', 'Custom business profiles', 'Saved history database'],
            url: 'https://apps.apple.com/us/app/notes2quote/id6759196157'
        },
        {
            title: 'GHOST GUIDE AR',
            desc: 'Location-aware AR historic audio guide.',
            longDesc: 'Turn your daily walk into a journey through time. Ghost Guide AR is a hands-free, location-aware audio guide that reveals the hidden history scattered all around you by whispering stories as you pass trigger points.',
            tag: 'AR & Travel | iOS App',
            grid: 'span 4',
            color: 'rgba(231, 76, 60, 0.1)',
            tech: ['SwiftUI', 'ARKit', 'CoreLocation', 'AVFoundation'],
            features: ['Trigger-point location audio', 'Augmented Reality overlays', 'Hands-free navigation', 'Smart glasses compatibility'],
            url: 'https://apps.apple.com/us/app/ghost-guide-ar/id6765615176'
        },
        {
            title: 'DIGITAL FRONTIER',
            desc: 'Independent engineering of NFT ecosystems.',
            longDesc: 'Solo-engineered Web3 ecosystems including the Pixelated Artefacts Brit Ape Club. Developed smart contracts, minting engines, and community dApps on Ethereum and Solana.',
            tag: '100% Solo | Web3 | dApps',
            grid: 'span 6',
            color: 'rgba(142, 68, 173, 0.1)',
            tech: ['Solidity', 'Rust', 'React', 'Ethers.js'],
            features: ['Custom ERC-721 contracts', 'Gas-optimized minting', 'Cross-chain bridges']
        },
        {
            title: 'ORBITALWATCH',
            desc: 'Autonomous satellite ground station & weather telemetry receiver.',
            longDesc: 'A native macOS application and autonomous ground station terminal engineered to track, schedule, capture, and decode real-time transmissions from Earth-observation and weather satellites (NOAA-15, NOAA-18, NOAA-19, Meteor-M, and the ISS) with SGP4 orbital mechanics, Doppler tuning, and false-color cloud reconstruction.',
            tag: 'Space & SDR | macOS App',
            grid: 'span 6',
            color: 'rgba(0, 229, 255, 0.1)',
            tech: ['SwiftUI', 'SGP4 Mechanics', 'Accelerate DSP', 'RTL-SDR', 'CelesTrak'],
            features: ['Real-time Polar Sky Radar', 'Live FFT Waterfall Spectrogram', 'NOAA APT Multi-Channel Decoder', 'CelesTrak TLE Sync'],
            url: 'https://github.com/PopusoiIonut/OrbitalWatch'
        },
        {
            title: 'CULTURE CODE',
            desc: 'Frictionless travel laws and local etiquette advisor.',
            longDesc: 'A premium travel companion that grounds destination laws and cultural rules using Wikipedia context and Gemini AI analysis, ensuring you always travel respectably and safely anywhere in the world.',
            tag: 'Travel & Rules | iOS App',
            grid: 'span 6',
            color: 'rgba(52, 152, 219, 0.1)',
            tech: ['SwiftUI', 'Wikipedia API', 'Gemini AI', 'Offline Cache'],
            features: ['Surprising local laws scanner', 'Factual Wikipedia grounding', 'Support for 200+ countries', 'Custom premium iOS design'],
            url: 'https://github.com/PopusoiIonut/Culture-Code',
            supportUrl: '/support/culturecode'
        },
        {
            title: 'DOSAR AUTO',
            desc: 'Automotive compliance, fleet records & document vault.',
            longDesc: 'A comprehensive vehicle paperwork and fleet management companion built natively for Android. Tracks vehicle registration, insurance (RCA), technical inspections (ITP), road taxes (Rovinieta), fuel logs, maintenance history, and refrigeration temperature checks with offline local notifications.',
            tag: 'Automotive & Fleet | Android App',
            grid: 'span 6',
            color: 'rgba(230, 126, 34, 0.1)',
            tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager', 'Material 3'],
            features: ['Document expiry notifications', 'Fuel & mileage tracking', 'Service & maintenance history', 'Refrigeration compliance checks'],
            url: 'https://github.com/PopusoiIonut/DosarAuto'
        },
        {
            title: 'DROIDCONNECT',
            desc: 'Wireless Android bridge, ADB manager & low-latency screen streamer.',
            longDesc: 'A native macOS bridge and desktop utility engineered to wirelessly connect, manage, and mirror Android devices without physical cables. Features 1-click wireless ADB pairing, low-latency screen streaming, bi-directional file management, clipboard synchronization, and APK sideloading.',
            tag: 'Open Source | Android & macOS Utility',
            grid: 'span 6',
            color: 'rgba(61, 220, 132, 0.1)',
            tech: ['SwiftUI', 'Wireless ADB', 'scrcpy / H.264', 'WebSocket', 'AppKit'],
            features: ['1-Click Wireless ADB Pairing', 'Low-Latency Screen Mirroring', 'Bi-directional File Explorer', 'Clipboard & App Management'],
            url: 'https://github.com/PopusoiIonut/DroidConnectApp'
        },
        {
            title: 'STUDIO STATUS',
            desc: 'Online & taking new projects.',
            tag: 'Available Now',
            grid: 'span 6',
            color: 'rgba(76, 217, 100, 0.1)',
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
