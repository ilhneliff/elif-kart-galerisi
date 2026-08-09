// src/App.jsx
// src/App.jsx
import Kart from './components/Kart.jsx'
import { projeler } from './data.js'
import './App.css'

function App() {
  return (
    <div className="sayfa">
      <h1>Elif'in Proje Galerisi</h1>
      <div className="galeri">
        {projeler.map((p) => (
          <Kart
            key={p.id}
            baslik={p.baslik}
            aciklama={p.aciklama}
            resimUrl={p.resimUrl}
            etiket={p.etiket}
          />
        ))}
      </div>
    </div>
  )
}


export default App