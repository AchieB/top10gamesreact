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
 
        <nav className="footer-nav" aria-label="Footernavigatie">
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('archief')}>Archief</button>
          <button onClick={() => onNavigate('over')}>Over</button>
        </nav>
      </div>
    </footer>
  )
}
 
export default Footer