import React from 'react';
import styles from '../styles/styles.module.css';

const Card = ({image, tittle,genre}) => {
    return (
        <div className={`card my-5 ${styles.height_card} ${styles.card_shadow}`}>
            <img src={image} alt="img" className="card-img-top"/>
            <div className="card-body bg-dark h-25">
                <h4 className="card-tittle text-white">{tittle}</h4>
                <p className="card-text text-white">{genre}</p>
            </div>
        </div> 
    );
}
 
export default Card;