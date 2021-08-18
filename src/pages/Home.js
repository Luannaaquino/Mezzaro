import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Header } from "../components/Header";
import Inicio from "../images/Inicio.jpg"
import Nikebanner from "../images/Nikebanner.jpg"

export default function Home() {
    return (
        <>
         <Header/>
         <InicioContainer>
            <img src={Inicio} alt="Banner"/>
            <div className="promoção">
                <h1>20% OFF EM TODO O SITE</h1>
            </div>
            <h2>Promoção especial de aniversário da loja</h2>
            <div className="calçados">
            <Link to="/products"><button>Ver Calçados</button></Link>
            </div>
            <p>*Promoção válida até às 23:59 do dia 31/05</p>
            <div className="banner2">
            <Link to="/products"><img src={Nikebanner} alt="Banner"/></Link>
            </div>
         </InicioContainer>
        </>
    )
};

const InicioContainer = styled.header`
  img{
      margin-top: 115px;
      width: 100%
  }

  .promoção{
      display: flex;
      justify-content: center;
      margin-top: 55px;
  }

  .promoção h1{
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
  }

  h2{
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 5px; 
  }

  .calçados{
    display: flex;
    justify-content: center;
    margin-top: 20px; 
  }

  button{
      height: 50px;
      width: 180px;
      background-color: black;
      color: white;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      cursor: pointer;
  }

  p{
    font-size: 16px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #8d8d8d;
  }

  @media (max-width: 600px) {
    .promoção h1{
      font-size: 40px;
    }

    h2{
        font-size: 18px; 
    }

    .banner img{
      margin-top: 15px;
      width: 80%
    }

  
`;