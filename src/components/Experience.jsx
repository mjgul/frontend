import React from 'react';

const experiences = [
    {
        id: 1,
        role: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2023 - Present',
        description: 'Leading the frontend team in building scalable React applications. Implemented micro-frontends architecture.',
        tech: ['React', 'Next.js', 'GraphQL'],
    },
    {
        id: 2,
        role: 'Frontend Developer',
        company: 'Creative Agency',
        period: '2021 - 2023',
        description: 'Developed interactive websites and mobile apps for various clients. Specialized in animations and performance optimization.',
        tech: ['React Native', 'TypeScript', 'Framer Motion'],
    },
    {
        id: 3,
        role: 'Web Developer',
        company: 'StartUp Hub',
        period: '2019 - 2021',
        description: 'Full stack development with a focus on Angular frontend. Built the initial MVP for the company flagship product.',
        tech: ['Angular', 'RxJS', 'Node.js'],
    },
];

const Experience = () => {
    return (
        <section id="experience" style={{ backgroundColor: '#162033' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Experience</h2>
                <div style={styles.timeline}>
                    {experiences.map((exp) => (
                        <div key={exp.id} style={styles.item}>
                            <div style={styles.marker}></div>
                            <div style={styles.content}>
                                <span style={styles.period}>{exp.period}</span>
                                <h3 style={styles.role}>{exp.role}</h3>
                                <h4 style={styles.company}>{exp.company}</h4>
                                <p style={styles.desc}>{exp.description}</p>
                                <div style={styles.techStack}>
                                    {exp.tech.map((t) => (
                                        <span key={t} style={styles.tech}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    timeline: {
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        paddingLeft: '2rem',
        borderLeft: '2px solid var(--border-color)',
    },
    item: {
        marginBottom: '3rem',
        position: 'relative',
    },
    marker: {
        position: 'absolute',
        left: '-2.6rem',
        top: '0.5rem',
        width: '1rem',
        height: '1rem',
        backgroundColor: 'var(--accent-color)',
        borderRadius: '50%',
        border: '4px solid var(--bg-color)',
    },
    content: {
        paddingLeft: '1rem',
    },
    period: {
        color: 'var(--accent-color)',
        fontWeight: '600',
        fontSize: '0.875rem',
        marginBottom: '0.5rem',
        display: 'block',
    },
    role: {
        fontSize: '1.5rem',
        marginBottom: '0.25rem',
    },
    company: {
        fontSize: '1.125rem',
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
        fontWeight: '400',
    },
    desc: {
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
    },
    techStack: {
        display: 'flex',
        gap: '0.75rem',
    },
    tech: {
        fontSize: '0.875rem',
        color: 'var(--text-color)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
    },
};

export default Experience;
