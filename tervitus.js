
const tervitus1 = (nimi) => {
    return `
    <div>
        <h1>Tere ${nimi}</h1>
    </div>
    `
}

const tervitus2 = nimi => 'Suur tere ' + nimi

const tervitus3 = (nimi) => {
    console.log('Tere - tere ' + nimi)
}

console.log(tervitus1('Nipitiri'))
console.log(tervitus2('Klaabu'))

const nimed = [
    "Kati",
    "Mati",
    "Rebase Rein"
]

const tervitused = nimed.map(element => 'Salutatsioonid - ' + element)


nimed.forEach(tervitus3)
console.log(tervitused);
