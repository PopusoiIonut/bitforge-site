import React from 'react';

const Hero = () => {
    return (
        <header style={{
            textAlign: 'center',
            padding: '6rem 2rem 4rem',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                lineHeight: '1.1',
                margin: '0 0 1.5rem',
                textTransform: 'uppercase',
                fontWeight: '700'
            }}>
                Forging the Future of <br />
                <span style={{ color: 'var(--accent-blue)' }}>Digital Experience</span>
            </h1>
            <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto 2.5rem'
            }}>
                Expertise in iOS, AI, and Backend. <br />
                Rocksolid Solutions, Built Locally.
            </p>
            <button className="premium" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Start a Project
            </button>
        </header>
    );
};

export default Hero;
