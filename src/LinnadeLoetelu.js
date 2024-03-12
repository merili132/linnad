function LinnadeLoetelu({ linnad,setAktiivneLinn }) {
    const valiLinn = (linnaIndex) => {
        console.log('-> linn: ' + linnaIndex)
        setAktiivneLinn(linnaIndex)
    }
    /*
    function valiLinn() {
        console.log('-> linn')
    }*/

    const linnaNimed = linnad.map((linn, index) => {
        return (
            <li key = {index} onClick={()=>valiLinn(index)}>
                {linn.nimi} - {linn.kylastusi}
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