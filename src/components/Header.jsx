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

        <div className="logo" onClick={() => handleNav('home')}>
          <span className="logo-icon">▶</span>
          <span className="logo-text">
            TOP<em>10</em>GAMES
          </span>
        </div>

        <nav className="main-nav">
          <span
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Home
          </span>
          <span
            className={`nav-link ${currentPage === 'archief' ? 'active' : ''}`}
            onClick={() => handleNav('archief')}
          >
            Archief
          </span>
          <span
            className={`nav-link ${currentPage === 'over' ? 'active' : ''}`}
            onClick={() => handleNav('over')}
          >
            Over
          </span>
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

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <span onClick={() => handleNav('home')}>Home</span>
        <span onClick={() => handleNav('archief')}>Archief</span>
        <span onClick={() => handleNav('over')}>Over</span>
      </nav>
    </header>
  )
}

export default Header
