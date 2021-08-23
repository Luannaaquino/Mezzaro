import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import IMG from '../images/img01.jpg';


export const Product = ({title, image, category, price, id}) => {
  const value = useContext(DataContext);
  const addCart = value.addCart;

  return (
    <div className="product">
        <a href="#">
            <div className="product_img">
                <img src={image.default} alt={title} width="150" />
            </div>
        </a>
        <div className="product_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">${price}</p>
            <div className="buttom">
                <button className="btn1" onClick={() => addCart(id)}>
                    Adicionar ao Carrinho
                </button>
                <button className="btn2"><a href="#" className="btn">Vistar</a></button>
            </div>
        </div>
        </div>
  );
};