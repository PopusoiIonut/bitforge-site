import React from 'react';

const BentoGrid = () => {
    const projects = [
        {
            title: 'ELASTIC',
            desc: 'Scale dynamically with AI-driven flexibility.',
            tag: 'iOS App | Cloud Integration',
            grid: 'span 6',
            color: 'rgba(0, 163, 255, 0.1)'
        },
        {
            title: 'FOCUSBAR',
            desc: 'Boost productivity & eliminate distractions.',
            tag: 'macOS + iOS | AI Assist',
            grid: 'span 3',
            color: 'rgba(255, 120, 0, 0.1)'
        },
        {
            title: 'WELLNESSFORGE',
            desc: 'Holistic health tracking using local AI.',
            tag: 'iOS App | HealthKit',
            grid: 'span 3',
            color: 'rgba(76, 217, 100, 0.1)'
        },
        {
            title: 'DIGITAL FRONTIER',
            desc: 'Independent engineering of Pixelated Artefacts Brit Ape Club. Solo-built NFT ecosystems on Ethereum & Solana.',
            tag: '100% Solo | Web3 | dApps',
            grid: 'span 8',
            color: 'rgba(168, 85, 247, 0.1)'
        },
        {
            title: 'STUDIO STATUS',
            desc: 'Online & taking new projects.',
            tag: 'Available Now',
            grid: 'span 4',
            status: true
        },
        {
            title: 'ROCKSOLID ENGINEERING',
            desc: 'Crafting resilient, scalable architectures with precision.',
            tag: 'Built to Endure',
            grid: 'span 4'
        },
        {
            title: 'LOCAL AI FIRST',
            desc: 'Leverage secure, powerful on-device AI for intelligent experiences.',
            tag: 'Privacy Centric',
            grid: 'span 4'
        }
    ];

    return (
        <section className="bento-grid">
            {projects.map((p, i) => (
                <div
                    key={i}
                    className="glass-card"
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
                </div>
            ))}
        </section>
    );
};

export default BentoGrid;
