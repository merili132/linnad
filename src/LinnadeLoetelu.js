function LinnadeLoetelu({linnad}) {
    const linnaNimed = linnad.map((linn) => {
        return (
            <li>
                {linn.nimi}
            </li>
        )
    })

    return (
        <div>
            <h>Linnade loetelu</h>
            <ul>
                {linnaNimed}
            </ul>
        </div>

    );
}

export default LinnadeLoetelu;