import React from "react";
import styled from 'styled-components';

const Modal = () =>{
    return(
        <ModalStyle>
            <h1>Teste</h1>
        </ModalStyle>
    );
};

export default Modal;

const ModalStyle = styled.div`
  position: fixed;
  top: 300px;
  left: calc(50vw - 20%);
  background: #333333;
  border-radius: 20px;
  width: 50%;
  max-width: 500px;
  min-height: 200px;
  padding: 20px 50px;
  z-index: 5;
  @media (max-width: 600px) {
    width: 100%;
    left: 0;
    flex-direction: column;
    border-radius: 0;
    padding: 20px 0;
  }
`;