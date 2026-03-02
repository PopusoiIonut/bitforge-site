import React from 'react';

const Social = () => {
    const socialLinks = [
        { name: 'X', url: 'https://x.com/PopusoiIonut', icon: '𝕏' },
        { name: 'GitHub', url: 'https://github.com/PopusoiIonut', icon: '🐙' },
        { name: 'Discord', url: 'https://discord.gg/dKm2PJKTs9', icon: '💬' },
        { name: 'WhatsApp', url: 'https://wa.me/447440778076', icon: '📞' },
        { name: 'OpenSea', url: 'https://opensea.io/collection/pixelated-artefacts-brit-ape-club', icon: '🌊' },
        { name: 'Rarible', url: 'https://og.rarible.com/user/0xc764257c85c0788158c2b526736abbe0d2548bc1/owned', icon: '💎' },
        { name: 'Telegram', url: 'https://t.me/bitforgelabs', icon: '✈️' }
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        textDecoration: 'none',
                        opacity: 0.7,
                        transition: 'opacity 0.2s, transform 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.7';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default Social;
