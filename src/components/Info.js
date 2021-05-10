import React, {Fragment} from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    const {strArtist, strArtistThumb, strBiographyEN, strGenre } = info;

    return (  
        <Fragment>
            <h2 className="text-white">Artist</h2>
            <div className="bg-dark rounded-3 px-5 py-5">
                <div className="card">
                    <img src={strArtistThumb} alt={strArtistThumb} className="card-img-top"/>
                    <div className="card-body">
                        <h2 className="card-tittle fw-bold">{strArtist}</h2>
                        <h5 className="card-text mb-3">Genre: {strGenre}</h5>
                        <label className="fw-bold">Biography</label>
                        <p className="card-text border px-2">{strBiographyEN}</p>                       
                    </div>

                </div>  
            </div>
        </Fragment>
    );
}
 
export default Info;