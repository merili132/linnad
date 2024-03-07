import './linnad.css';
import Linn from './Linn';
import londonPilt from './Pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg';
import pariisPilt from './Pildid/pariis.png';
import berliinPilt from './Pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.jpg'
import LinnadeLoetelu from './LinnadeLoetelu';

const pariis = {
  nimi: 'Pariis',
  riik: 'Pantsusmaa',
  pilt: pariisPilt
}

const linnad = [
  pariis,
  { nimi: 'London', riik: 'Inglismaa', pilt: londonPilt },
  { nimi: 'Berliin', riik: 'Saksamaa', pilt: berliinPilt }
]

/* esialgne App kus iga linn algväärtustatakse eraldi
function App() {
  return (
    <div className="container">
      <h1>Minu lemmik linnad</h1>
      <Linn name={pariis.nimi} riik={pariis.riik} pilt={pariis.pilt} />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Elva" riik="Eesti" />
    </div>
  );
}
*/

function App() {
  return (
    <div className='container'>
      <LinnadeLoetelu linnad={linnad}/>
      <div>
        <div>Linnad Euroopas</div>
        {linnad.map((linn) => {
          return (
            <Linn
              name={linn.nimi}
              riik={linn.riik}
              pilt={linn.pilt} />
          )
        })}
      </div>

    </div>
  )
}

export default App;
