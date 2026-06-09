import { useState } from 'react'
 
function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
 
  function handleNav(page) {
    onNavigate(page)
    setMenuOpen(false)
  }
 
  return (
    <header className="site-header">
      <div className="header-inner">
 
        <div
          className="logo"
          role="button"
          tabIndex={0}
          onClick={() => handleNav('home')}
          onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
          aria-label="Ga naar homepage"
        >
          <span className="logo-icon" aria-hidden="true">▶</span>
          <span className="logo-text">
            TOP<em>10</em>GAMES
          </span>
        </div>
 
        <nav className="main-nav" aria-label="Hoofdnavigatie">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'archief' ? 'active' : ''}`}
            onClick={() => handleNav('archief')}
            aria-current={currentPage === 'archief' ? 'page' : undefined}
          >
            Archief
          </button>
          <button
            className={`nav-link ${currentPage === 'over' ? 'active' : ''}`}
            onClick={() => handleNav('over')}
            aria-current={currentPage === 'over' ? 'page' : undefined}
          >
            Over
          </button>
        </nav>
 
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu openen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
 
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobiele navigatie">
        <button onClick={() => handleNav('home')}>Home</button>
        <button onClick={() => handleNav('archief')}>Archief</button>
        <button onClick={() => handleNav('over')}>Over</button>
      </nav>
    </header>
  )
}
 
export default Header