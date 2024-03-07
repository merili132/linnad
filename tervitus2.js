const sober = {
    nimi: 'Nipitiri',
    aadress: 'Metsatuka 5'
}

console.log(sober.nimi)  // <-- Nipitiri

const {nimi} = sober;

console.log(nimi)  // <-- Nipitiri

const tervitus = [
    'Tige kala',
    (nimi) => 'Tere ' + nimi
]

console.log(tervitus[1]('Karu Kati'))

const [sobernimi, looTervitus] = tervitus
console.log(looTervitus(sobernimi))