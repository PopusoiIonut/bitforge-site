import { useState } from 'react'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import './index.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ width: '100%', background: 'var(--bg-deep)', color: 'white' }}>
      <nav style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        background: 'rgba(15, 15, 18, 0.8)'
      }}>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontWeight: '700', fontSize: '1.2rem', fontFamily: 'Outfit', cursor: 'pointer' }}
        >
          BitForge Labs
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} style={{
            background: 'var(--accent-blue)',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '600'
          }}>Start a Project</a>
        </div>
      </nav>

      <Hero />
      <BentoGrid onOpenProject={handleOpenProject} />
      <Contact />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseProject}
      />
    </main>
  )
}

export default App
