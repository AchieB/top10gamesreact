import { useState } from 'react'
import FilterBar from '../components/FilterBar'
import GameCard  from '../components/GameCard'
import { games } from '../data/games'

function Home({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleGames = games.filter((game) => {
    if (activeFilter === 'all') return true
    return game.platforms.includes(activeFilter)
  })

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
        </div>
        <div className="hero-content">
          <p className="hero-label">📅 Juni 2025</p>
          <h1 className="hero-title">
            Top 10 Meest<br />
            <em>Gespeelde Games</em>
          </h1>
          <p className="hero-sub">
            De meest actuele lijst van wat Nederland speelt — elke maand bijgewerkt.
          </p>
          <div className="hero-badges">
            <span className="badge">🖥️ PC</span>
            <span className="badge">🎮 Console</span>
            <span className="badge">📱 Mobiel</span>
          </div>
        </div>
        <div className="hero-scroll-hint">↓ Scroll voor de lijst</div>
      </section>

      <FilterBar
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
      />

      <main className="container top10-section">
        <div className="top10-list" id="gamesList">
          {visibleGames.map((game) => (
            <GameCard key={game.rank} game={game} />
          ))}
        </div>
      </main>

      <section className="about-strip container">
        <div className="about-text">
          <h3>Hoe werkt de lijst?</h3>
          <p>
            Elke maand wordt de top 10 handmatig samengesteld op basis van Steam-statistieken,
            app store rankings, sociale media trends en community-activiteit. De lijst combineert
            PC, console en mobiele games zodat iedere gamer iets herkent.
          </p>
        </div>
        <button className="btn-outline" onClick={() => onNavigate('over')}>
          Meer over dit project →
        </button>
      </section>
    </>
  )
}

export default Home
