import './linnad.css';
import Linn from './Linn';
import londonPilt from './Pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg';
import pariisPilt from './Pildid/pariis.png';

function App() {
  return (
    <div className="container">
      <h1>Minu lemmik linnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" pilt={pariisPilt} />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Elva" riik="Eesti" />
    </div>
  );
}

export default App;
