// src/App.jsx
import Kart from './components/Kart.jsx'
import Sayac from './components/Sayac.jsx'
import ProfilKart from './components/ProfilKart.jsx'
import GorevListesi from './components/GorevListesi.jsx'

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

      <Sayac

      />

      <ProfilKart
        
      />

      <GorevListesi
      />
    </div>
  )



}



export default App