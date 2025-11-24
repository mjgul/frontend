import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.left}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Let's Build Together</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Open for new opportunities and collaborations.</p>
                </div>
                <div style={styles.right}>
                    <div style={styles.socials}>
                        <a href="#" style={styles.link}>GitHub</a>
                        <a href="#" style={styles.link}>LinkedIn</a>
                        <a href="#" style={styles.link}>Twitter</a>
                    </div>
                    <p style={styles.copyright}>© {new Date().getFullYear()} Junaid Satti. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '4rem 0',
        borderTop: '1px solid var(--border-color)',
        marginTop: '4rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },
    socials: {
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '1rem',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '1rem',
    },
    copyright: {
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
    },
};

export default Footer;
