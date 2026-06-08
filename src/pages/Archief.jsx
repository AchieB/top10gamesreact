import { archief } from '../data/games'


function Archief({ onNavigate }) {
  return (
    <main className="container">

      <div className="page-hero">
        <h1>Archief <em>Edities</em></h1>
        <p>Bekijk de top 10 lijsten van voorgaande maanden.</p>
      </div>

      <div className="archief-grid">
        {archief.map((editie) => (
          <div
            key={`${editie.maand}-${editie.jaar}`}
            className={`archief-card ${editie.disabled ? 'disabled' : ''}`}
            onClick={() => !editie.disabled && editie.linkHome && onNavigate('home')}
          >
            <div className="maand">{editie.maand}</div>

            <div className="jaar">
              {editie.jaar}{editie.label ? ` · ${editie.label}` : ''}
            </div>

            {editie.disabled ? (
              <div className="coming-soon">Binnenkort</div>
            ) : (
              <div className="top3">
                {editie.top3.map((game, i) => (
                  <span key={i}>{game}<br /></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Archief
