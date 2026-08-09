function Kart({ baslik, aciklama = 'Açıklama eklenmedi', resimUrl }) {
    return (
        <div className="kart">
            <img src={resimUrl} alt={baslik} />
            <h3>{baslik}</h3>
            <p>{aciklama}</p>
        </div>
    )
}

export default Kart