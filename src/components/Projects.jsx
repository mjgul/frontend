import React from 'react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores, built with React and Redux.',
        tags: ['React', 'Redux', 'Chart.js'],
    },
    {
        id: 2,
        title: 'Social Media App',
        description: 'Mobile-first social platform with real-time messaging using React Native.',
        tags: ['React Native', 'Firebase', 'Node.js'],
    },
    {
        id: 3,
        title: 'Enterprise CRM',
        description: 'Large-scale customer relationship management system migrated from Angular to React.',
        tags: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
        id: 4,
        title: 'Portfolio V1',
        description: 'My previous portfolio site showcasing early work and design evolution.',
        tags: ['HTML', 'SCSS', 'JavaScript'],
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Featured Projects</h2>
                <div className="grid grid-2">
                    {projects.map((project) => (
                        <div key={project.id} style={styles.card}>
                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle}>{project.title}</h3>
                                <p style={styles.cardDesc}>{project.description}</p>
                                <div style={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} style={styles.tag}>{tag}</span>
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
    card: {
        backgroundColor: 'var(--card-bg)',
        borderRadius: '1rem',
        border: '1px solid var(--border-color)',
        padding: '2rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        cursor: 'pointer',
    },
    cardContent: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-color)',
    },
    cardDesc: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        flexGrow: 1,
    },
    tags: {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
    },
    tag: {
        fontSize: '0.875rem',
        padding: '0.25rem 0.75rem',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        color: 'var(--accent-color)',
        borderRadius: '1rem',
    },
};

export default Projects;
