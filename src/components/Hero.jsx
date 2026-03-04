import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header style={{
            textAlign: 'center',
            padding: '10rem 2rem 6rem',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                    lineHeight: '1',
                    margin: '0 0 1.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    letterSpacing: '-0.04em'
                }}
            >
                Forging the Future of <br />
                <span style={{ color: 'var(--accent-blue)' }}>Digital Experience</span>
            </motion.h1>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    fontSize: '1.4rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    fontWeight: '400'
                }}
            >
                Expertise in iOS, AI, and Backend. <br />
                Rocksolid Solutions, Built Locally.
            </motion.p>
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="premium"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
                Start a Project
            </motion.button>
        </header>
    );
};

export default Hero;
