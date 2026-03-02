import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'
import './index.css'

function App() {
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
        <div style={{ fontWeight: '700', fontSize: '1.2rem', fontFamily: 'Outfit' }}>BitForge Labs</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{
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
      <BentoGrid />
      <Contact />
    </main>
  )
}

export default App
