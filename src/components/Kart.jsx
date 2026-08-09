function Kart({ baslik, aciklama = 'Açıklama eklenmedi', resimUrl,etiket }) {
    return (
        <div className="kart">
            <img src={resimUrl} alt={baslik} />
            <span className="etiket">{etiket}</span>
            <h3>{baslik}</h3>
            <p>{aciklama}</p>
        </div>
    )
}

export default Kart
