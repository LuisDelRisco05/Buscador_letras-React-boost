import React, { useState} from 'react';
import style from '../styles/styles.module.css';

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, setError] = useState(false);

    // extraer valores del state busqueda
    const {artista, cancion} = busqueda;

    const actualizarState = e => {
       setBusqueda({
           ...busqueda,
           [e.target.name]: e.target.value
       })
    }

    // consultar apis
    const submitBusqueda = e => {
        e.preventDefault();

        // Validar
        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //buscar
        setBusquedaLetra(busqueda); 

         
    }
  


    return (  
        <div className={style.bg_color}>
            { error ? <p className={`alert ${style.alert_alert} text-center text-white`}>All fields are required <i class="fas fa-exclamation-circle"></i></p> : null }
            
            <div className="container">
                <div className="row">
                    <form
                    onSubmit={submitBusqueda} 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className={`text-center ms-5 text-wrap`}>Song Lyrics Search Engine</legend>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Artist Name"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Song Name"
                                            onChange={actualizarState}
                                            value={cancion}
                                         />
                                        </div>
                                    </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-end my-2"
                            >Search</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;