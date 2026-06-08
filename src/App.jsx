import { useState } from 'react'

import Header  from './components/Header'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import Archief from './pages/Archief'
import Over    from './pages/Over'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  function renderPage() {
    if (currentPage === 'archief') return <Archief onNavigate={setCurrentPage} />
    if (currentPage === 'over')    return <Over />
    return <Home onNavigate={setCurrentPage} />
  }

  return (
    <>
      <div className="noise"></div>

      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {renderPage()}

      <Footer onNavigate={setCurrentPage} />
    </>
  )
}

export default App
