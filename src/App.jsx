// src/App.jsx
import Kart from './components/Kart.jsx'

function App() {
  return (
    <div className="galeri">
      <Kart
        baslik="React"
        aciklama="Bileşen tabanlı bir arayüz kütüphanesi"
        resimUrl="https://placehold.co/300x200?text=React"
      />
      <Kart
        baslik="Vite"
        aciklama="Hızlı geliştirme sunucusu ve build aracı"
        resimUrl="https://placehold.co/300x200?text=Vite"
      />
      <Kart
        baslik="JSX"

        resimUrl="https://placehold.co/300x200?text=JSX"
      />
    </div>
  )
}



export default App