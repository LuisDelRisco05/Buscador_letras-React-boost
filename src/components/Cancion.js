import React, { Fragment } from 'react';

const Cancion = ({letra}) => {

    if(letra.length === 0) return null;

    return ( 
        <Fragment>
            <h2 className="text-white">Song Lyrics</h2>
            <div className="bg-dark bg-gradient rounded-3">
                <p className="letra text-white py-3 text-center">{letra}</p>
            </div>
        </Fragment>

    );
}

 
export default Cancion;