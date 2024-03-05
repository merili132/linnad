function Linn(props) {
    let riik=props.riik
    if (!riik) {
        riik = 'Teadmata'
    }

    return(
        <div>
            <h3>{props.name}, {riik}</h3>
            <img src={props.pilt} className="linn-img"/>
        </div>
    )
}

export default Linn;