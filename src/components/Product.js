import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import IMG from '../images/img01.jpg'

export const Product = ({title, image, category, price, id}) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="product">
        <a href="#">
            <div className="product_img">
                <img src={IMG} alt="" width="150" />
            </div>
        </a>
        <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
            <div className="buttom">
                <button className="btn1">
                    Adicionar ao Carrinho
                </button>
                <button className="btn2"><a href="#" className="btn">Vista</a></button>
            </div>
        </div>
        </div>
  );
};