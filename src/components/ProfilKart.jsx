import { useState } from 'react'

function ProfilKart() {
    const [isim, setIsim] = useState('Elif')
    const [begeniSayisi, setBegeniSayisi] = useState(0)

    return (
        <div>
            <h3>{isim}</h3>
            <p>❤️ {begeniSayisi}</p>
            <button onClick={() => setBegeniSayisi(onceki => onceki + 1)}>Beğen</button>
        </div>
    )
}

export default ProfilKart