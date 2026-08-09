import { useState } from 'react'

function GorevListesi() {
    const [gorevler, setGorevler] = useState([
        { id: 1, metin: 'React öğren' },
        { id: 2, metin: 'Kart galerisi yap' },
    ])
    const [yeniGorev, setYeniGorev] = useState('')

    const gorevEkle = () => {
        if (yeniGorev.trim() === '') return
        const yeni = { id: Date.now(), metin: yeniGorev }
        setGorevler([...gorevler, yeni]) // ESKİ diziyi kopyala, sonuna yeni ekle
        setYeniGorev('')
    }

    const gorevSil = (id) => {
        setGorevler(gorevler.filter((g) => g.id !== id)) // id'si eşleşmeyenleri tut
    }

    return (
        <div>
            <input
                value={yeniGorev}
                onChange={(e) => setYeniGorev(e.target.value)}
                placeholder="Yeni görev..."
            />
            <button onClick={gorevEkle}>Ekle</button>

            <ul>
                {gorevler.map((g) => (
                    <li key={g.id}>
                        {g.metin}
                        <button onClick={() => gorevSil(g.id)}>Sil</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GorevListesi