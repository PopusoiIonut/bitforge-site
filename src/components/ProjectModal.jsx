import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={onClose}>✕</button>

                        <div className="modal-body">
                            <span className="project-tag">{project.tag}</span>
                            <h2 style={{ fontSize: '3rem', margin: '0 0 1.5rem', lineHeight: 1.1 }}>{project.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                {project.longDesc || project.desc}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Tech Stack</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
                                        {project.tech?.map(t => <li key={t}>• {t}</li>) || <li>• iOS</li>}
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Features</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
                                        {project.features?.map(f => <li key={f}>• {f}</li>) || <li>• Local AI integration</li>}
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
                                {project.url && (
                                    <button className="premium" onClick={() => window.open(project.url, '_blank')}>
                                        Visit Project
                                    </button>
                                )}
                                <button
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'white',
                                        border: '1px solid var(--border-glass)',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '12px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={onClose}
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
