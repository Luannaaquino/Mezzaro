import React from "react";
import styled from 'styled-components';
import 'boxicons';
import Cart from "./Cart";

const Modal = ({id='modal', onClose= () => {}}) =>{

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }

    return(
        <ModalStyle id={id} onClick={handleOutsideClick}>
            <Container>
                <box-icon name="x" onClick={onClose}></box-icon>
                <Cart/>
            </Container>
        </ModalStyle>
    );
};

export default Modal;

const ModalStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  cursor: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Container = styled.div`
  background-color: #fff;
  color: #000;
  width: 60%;

  border-radius: 20px;

  box-icon{
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
}
  `