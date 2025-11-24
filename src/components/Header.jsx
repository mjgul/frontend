import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>JS</div>
        <nav>
          <ul style={styles.navList}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '1.5rem 0',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 100,
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--accent-color)',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
};

export default Header;
