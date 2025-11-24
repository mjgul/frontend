import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={styles.hero}>
            <div className="container">
                <h1 style={styles.title}>
                    Building Digital <br />
                    <span style={{ color: 'var(--accent-color)' }}>Experiences</span>
                </h1>
                <p style={styles.subtitle}>
                    Frontend Developer with 5 years of expertise in Angular, React, and React Native.
                    I craft high-performance, beautiful web and mobile applications.
                </p>
                <div style={styles.actions}>
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
    },
    title: {
        fontSize: 'clamp(3rem, 5vw, 5rem)',
        fontWeight: '800',
        marginBottom: '1.5rem',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        marginBottom: '2.5rem',
    },
    actions: {
        display: 'flex',
        gap: '1rem',
    },
    secondaryBtn: {
        padding: '0.75rem 1.5rem',
        color: 'var(--text-color)',
        fontWeight: '600',
        border: '1px solid var(--border-color)',
        borderRadius: '0.5rem',
        transition: 'all 0.2s ease',
    },
};

export default Hero;
