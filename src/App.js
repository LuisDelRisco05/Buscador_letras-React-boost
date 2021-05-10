import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';


function App() {

  const [busquedaletra, setBusquedaLetra] = useState({});

  const [letra, setLetra] = useState('');

  const [info, setInfo] = useState({})
  
  useEffect(() => {

    
    
    // forma de prevenir si un objeto está vacio
      if(Object.keys(busquedaletra).length === 0) return;

      const consultarApiLetra = async () => {
        // extraer busquedaletra
        const {artista, cancion} = busquedaletra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        const [letra, informacion] = await Promise.all([
          axios(url),
          axios(url2)
        ]);

        setLetra(letra.data.lyrics);
        setInfo(informacion.data.artists[0]);

      }
      consultarApiLetra();
      
  }, [busquedaletra, info]);

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container-fluid mt-5">
        <div className="row">

          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>

          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
