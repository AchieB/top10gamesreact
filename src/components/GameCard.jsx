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
      <div className="rank-badge" aria-label={`Rang ${game.rank}`}>
        {String(game.rank).padStart(2, '0')}
      </div>

      <div className="game-thumb">
        <img
          src={game.image}
          alt={`${game.title} thumbnail`}
          width="120"
          height="80"
          decoding="async"
        />
        {game.platforms.map((platform) => (
          <span key={platform} className={`platform-tag ${platform}`} aria-label={platform}>
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

      <div className={`game-trend ${trendClass}`} aria-label={`Trend: ${game.trendText}`}>
        {game.trendText}
      </div>
    </article>
  )
}

export default GameCard