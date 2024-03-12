import {useState} from "react"

function Linn({riik, name, pilt, kylastusi, setKylastusi}) {
    if (!riik) {
        riik = 'Teadmata'
    }

    const suurenda = () => {
        setKylastusi(kylastusi+1)
    }
    const vahenda = () => {
        setKylastusi(kylastusi-1)
    }


    return(
        <div>
            <h3>{name}, {riik}</h3>
            <div><img src={pilt} className="linn-img"/></div>
            <button onClick={vahenda}>-</button>
            {kylastusi}
            <button onClick={suurenda}>+</button>
        </div>
    )
}

export default Linn;