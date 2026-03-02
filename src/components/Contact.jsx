import React from 'react';

import Social from './Social';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to build?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Let's forge something extraordinary together. Whether it's a local AI integration, a rocksolid iOS app, or a next-gen Web3 project, I'm here to help.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="premium" onClick={() => window.location.href = 'mailto:popusoiionut@yahoo.com'}>
                        Email Me
                    </button>
                    <button
                        onClick={() => window.open('https://github.com/PopusoiIonut', '_blank')}
                        style={{
                            background: 'transparent',
                            color: 'white',
                            border: '1px solid var(--border-glass)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '12px',
                            cursor: 'pointer'
                        }}
                    >
                        View GitHub
                    </button>
                </div>
                <Social />
            </div>
            <footer style={{ marginTop: '4rem', opacity: 0.4, fontSize: '0.9rem' }}>
                &copy; 2026 BitForge Labs. All rights reserved.
            </footer>
        </section>
    );
};

export default Contact;
