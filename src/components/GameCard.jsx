function GameCard({ game }) {

  const trendClass =
    game.trend === 'up'   ? 'up'   :
    game.trend === 'down' ? 'down' :
    'same'

  return (
    <article
      className={`game-card ${game.rank === 1 ? 'rank-1' : ''}`}
      data-platform={game.platforms.join(' ')}
    >
      <div className="rank-badge">
        {String(game.rank).padStart(2, '0')}
      </div>

      <div className="game-thumb">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
        />
        {game.platforms.map((platform) => (
          <span key={platform} className={`platform-tag ${platform}`}>
            {platform}
          </span>
        ))}
      </div>

      <div className="game-info">
        <h2 className="game-title">{game.title}</h2>
        <p className="game-reason">{game.reason}</p>
        <div className="game-meta">
          <span className="meta-item">Genre: {game.genre}</span>
          <span className="meta-item">Uitgever: {game.publisher}</span>
        </div>
      </div>

      <div className={`game-trend ${trendClass}`}>
        {game.trendText}
      </div>
    </article>
  )
}

export default GameCard
