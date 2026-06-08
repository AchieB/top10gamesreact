function Over() {
  return (
    <main className="container">

      <div className="page-hero">
        <h1>Over <em>Dit Project</em></h1>
        <p>Informatie over de website en het schoolproject.</p>
      </div>

      <div className="over-content">

        <h2>Wat is Top10Games?</h2>
        <p>
          Top10Games is een Nederlandstalige website die elke maand een actuele top 10 bijhoudt
          van de meest gespeelde games. De lijst combineert PC, console en mobiele games zodat
          iedere gamer iets herkent.
        </p>
        <p>
          Er was geen simpele, overzichtelijke Nederlandse bron die dit deed — dus heb ik die
          zelf gemaakt.
        </p>

        <h2>Doelgroep</h2>
        <p>
          De website richt zich op Nederlandse gamers van 12 tot 35 jaar — zowel casual als
          hardcore spelers. Mensen die gewoon snel willen zien wat er populair is, zonder door
          een ingewikkelde internationale site te scrollen.
        </p>

        <h2>Hoe wordt de lijst samengesteld?</h2>
        <p>Elke maand kijk ik naar:</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
          <li style={{ padding: '0.3rem 0', color: 'var(--text-muted)' }}>📊 Steam concurrent player statistieken</li>
          <li style={{ padding: '0.3rem 0', color: 'var(--text-muted)' }}>📱 App Store en Google Play rankings</li>
          <li style={{ padding: '0.3rem 0', color: 'var(--text-muted)' }}>💬 Activiteit op Reddit, Discord en gaming communities</li>
          <li style={{ padding: '0.3rem 0', color: 'var(--text-muted)' }}>📺 Twitch kijkersaantallen en YouTube trends</li>
        </ul>

        <h2>Technische keuzes</h2>
        <ul className="tech-list">
          <li><span>Framework</span> React</li>
          <li><span>Frontend</span> HTML, CSS, JavaScript</li>
          <li><span>Build tool</span> Vite</li>
          <li><span>Versiebeheer</span> Git &amp; GitHub</li>
          <li><span>Hosting</span> Shared hosting</li>
          <li><span>Design</span> Responsive, mobile-first</li>
          <li><span>Browsers</span> Chrome, Firefox, Edge, Brave</li>
        </ul>

        <h2>Testen</h2>
        <p>
          De site wordt getest op laptop, tablet en mobiel. Meerdere browsers worden gecheckt
          (Chrome, Firefox, Edge, Brave). Feedback van medestudenten en vrienden wordt verwerkt.
        </p>

        <h2>Over de maker</h2>
        <p>
          Dit project is gemaakt door{' '}
          <strong style={{ color: 'var(--text)' }}>Ahmed Borghol</strong> als schoolopdracht.
          Het doel: leren werken met React, Git/GitHub en het bouwen van een echte frontend aan
          de hand van een eigen plan van aanpak.
        </p>
      </div>
    </main>
  )
}

export default Over
