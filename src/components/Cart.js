import React, { useContext } from 'react';
import 'boxicons';
import styled from 'styled-components';
import IMG from '../images/img01.jpg'

export default function Cart() {

    return (
        <CartContainer>
           <div className="Carrinho">
               <div className="carrinho_fechar">
                    <box-icon name="x"></box-icon>
               </div>
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
`
