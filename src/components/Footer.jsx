function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        <span className="logo-text small">
          TOP<em>10</em>GAMES
        </span>

        <p>
          Een project van <strong>Ahmed Borghol</strong> · Gemaakt met React &amp; ❤️
        </p>

        <nav className="footer-nav">
          <span onClick={() => onNavigate('home')}>Home</span>
          <span onClick={() => onNavigate('archief')}>Archief</span>
          <span onClick={() => onNavigate('over')}>Over</span>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
