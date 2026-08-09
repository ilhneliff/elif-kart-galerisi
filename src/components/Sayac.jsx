import { useState } from 'react'

function Sayac() {
    const [sayi, setSayi] = useState(0)

    const artir = () => setSayi(oncekiSayi => oncekiSayi + 1)
    const azalt = () => setSayi(sayi - 1)
    const sifirla = () => setSayi(0)

    return (
        <div className="sayac">
            <h2>{sayi}</h2>
            <button onClick={azalt}>-1</button>
            <button onClick={sifirla}>Sıfırla</button>
            <button onClick={artir}>+1</button>
        </div>
    )
}

export default Sayac