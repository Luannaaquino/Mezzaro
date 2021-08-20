import React, { useContext } from 'react';
import 'boxicons';
import styled from 'styled-components';
import IMG from '../images/img01.jpg'

export default function Cart() {

    return (
        <CartContainer>
           <div className="Carrinho">
               <h2>Seu Carrinho</h2>
                <div className="carrinho_center">

                <div className="carrinho-item">
                    <img src={IMG}></img>
                    <div>
                        <h3>title</h3>
                        <p className="price">$340</p>
                    </div>
                    <div>
                        <box-icon name="up-arrow" type="solid"></box-icon>
                        <p className="quantidade">1</p>
                        <box-icon name="down-arrow" type="solid"></box-icon>
                    </div>
                    <div className="remove_item">
                        <box-icon name="trash"></box-icon>
                    </div>
                </div>
                </div>
               <div className="carrinho_footer">
                    <h3>Total</h3>
                    <button className="btn">Payment</button>
               </div>
           </div>
        </CartContainer>
      );
    }

const CartContainer = styled.div`
    .Carrinho h2{
        display: flex;
        justify-content: center;
        text-aling: center;
        font-size: 2rem;
        font-family: 'Bebas Neue', cursive;
    }

    .carrinho_center{
        width: 90%;
        margin: 0 auto;
    }

    .carrinho-item{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        width: 80%;
        margin: 2rem auto;
        box-shadow: 0 1px 10px #08a05c;
        border-radius: 5px;
    }

    .carrinho-item img{
        width: 9rem;
    }

    .carrinho-item h3{
        margin-top: 1.5rem;
        font-weight: 600;
        font-size: 1.5rem;
    }

    .carrinho-item .price{
        color: #1a202c;
        font-size: 1rem;
        font-weight: bold;
        margin-top: 5px;
        text-align: start;
    }

    .carrinho-item box-icon{
        fill: #08a05c;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    .carrinho-item .quantidade{
        font-size:1.5rem;
        font-weight: bold;

    }

    .carrinho-item .remove_item box-icon{
        width: 60px;
        height: 80px;
        fill:crimson;
        margin-top:1rem;
    }

    .carrinho_footer{
        text-align: center;
        margin-bottom:3rem;
    }

    .carrinho_footer h3{
        font-size: 2rem;
        font-family: 'Bebas Neue', cursive;
    }

    .carrinho_footer .btn{
        display: inline;
        padding: .3rem 1rem;
        font-size: 1.2rem;
        background-color: #08a05c;
        border: none;
        cursor: pointer;
    }

    .carrinho_footer .btn:hover{
        background-color: #3033d3;
        color: white;
    }


`
