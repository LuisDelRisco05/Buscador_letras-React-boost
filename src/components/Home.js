import React, { Fragment } from "react";
import Card from "./Card";
import daddy from "../assets/daddy.jpg";
import maroon5 from "../assets/maroon5.jpg";
import romeo from "../assets/romeo.jpg";
import reik from "../assets/reik.jpg";
import tito from "../assets/tito.jpg";
import luis from "../assets/luis.jpg";

import styles from '../styles/styles.module.css';

const Home = ({setHome}) => {
  const cardsList = [
    {
        id: 1,
        tittle: "Daddy Yankee",
        image: daddy,
        genre: "Rap"
    },
    {
        id: 2,
        tittle: "Maroon 5",
        image: maroon5,
        genre: "Pop"
    },
    {
        id: 3,
        tittle: "Romeo Santos",
        image: romeo,
        genre: "Bachata"
    },
    {
        id: 4,
        tittle: "Reik",
        image: reik,
        genre: "Latin pop"
    },
    {
        id: 5,
        tittle: "Tito Nieves",
        image: tito,
        genre: "Salsa"
    },
    {
        id: 6,
        tittle: "Luis Fonsi",
        image: luis,
        genre: "Balada Romántica"
    }
  ];

  const boton = () =>{
      setHome(false)
  }


  return (
    <Fragment>
        <div className={`container-fluid ${styles.bg_color}`}>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="text-white">HOME <i class="fas fa-home"></i></h1> 
                    </div>
                    <div className="col-sm-6">
                        <button
                            className="btn btn-dark float-end mt-1"
                            onClick={boton}
                        >Search here <i class="fas fa-filter"></i></button>
                    </div>
                
                </div>
        </div>

        <div className="container text-center mt-5 text-white">
            <h1 className={styles.titulo}>Suggestions</h1>  
        </div>
        
        <div className={`container-fluid d-flex justify-content-center align-items-center ${styles.bg_color}`}>
            <div className="row">
                {
                    cardsList.map( card => (
                        <div className="col-6 col-sm-4 col-md-2" key={card.id}>
                        <Card 
                            image={card.image} 
                            tittle={card.tittle}
                            genre={card.genre}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </Fragment>
  );
};

export default Home;
