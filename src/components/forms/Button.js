import React from 'react';
import styled from 'styled-components';

const ButtonSend = styled.button`
  width: 256px;
  height: 48px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  color: cornsilk;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 0;
`;

const Button = () => {
  return <ButtonSend>ENTRAR</ButtonSend>;
};

export default Button;
