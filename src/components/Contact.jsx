import React, { useState } from 'react';

import Social from './Social';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        
        // Copy to clipboard
        navigator.clipboard.writeText('popusoiionut4@gmail.com')
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
            
        // Open default mail client
        window.location.href = 'mailto:popusoiionut4@gmail.com';
    };

    return (
        <section id="contact" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to build?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Let's forge something extraordinary together. Whether it's a local AI integration, a rocksolid iOS app, or a next-gen Web3 project, I'm here to help.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a
                        href="mailto:popusoiionut4@gmail.com"
                        onClick={handleEmailClick}
                        className="premium"
                        style={{
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        Email Me
                        {copied && (
                            <span style={{
                                position: 'absolute',
                                bottom: '130%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(0, 163, 255, 0.95)',
                                color: 'white',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
                                pointerEvents: 'none',
                                animation: 'fadeIn 0.2s ease-out'
                            }}>
                                Copied to clipboard! ✓
                            </span>
                        )}
                    </a>
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
