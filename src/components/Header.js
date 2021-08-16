import React, { useContext} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Nike from "../images/Nike.jpg"


export const Header = () => {

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={Nike} alt="Nike" width="150" />
      </div>
      <ul>
        <li>
          <a heref="#">INíCIO</a>
        </li>
        <li>
          <a heref="#">PRODUTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item">0</span>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0 5px 10px;

  a{
    color: black;
    text-align: none;
    text-transform: uppercase;
  }

  a:hover{
    color: #08a05c;
  }

  ul{
    display: flex;
    padding: 0;
    margin: 0;
  }

  ul li{
    padding: 0 1rem;
  }

  ul li a{
    font-weight: bold;
  }

  .cart{
    position: relative;
    cursor: pointer;
  }

  .cart box-icon{
    width: 45px;
    height: 45px; 
  }

  .cart span{
    position: absolute;
    right: -1.5 rem;
    width: -2.5 rem;
    height: 2.5rem;
    color: #08a05c;
    font-weight: bold
  }

  @media (max-width: 600px) {
    ul{
      display: none;
    }
}
`;