import React from 'react';
import Form from './components/forms/Form';
import './Reset.css';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: 48px;
  font-size: 40px;
  color: #383e71;
`;

const Subtitle = styled.h3`
  color: #989fdb;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;
`;

const Password = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

const BodyAll = styled.div`
  display: flex;
  flex: 1;
`;

const BodyLeft = styled.div`
  background-image: url('./img/bg-left.jpg');
  width: 765px;
  height: 768px;
`;

const App = () => {
  return (
    <BodyAll>
      <div className="body-left"></div>

      <div className="body-right">
        <div className="Cardform">
          <Title>
            Olá, seja <br /> bem-vindo!
          </Title>
          <br />
          <Subtitle>
            Para acessar a plataforma, <br /> faça seu login.
          </Subtitle>
          <Form />
          <Password>
            Esqueceu seu login ou senha? <br /> <a href="/">Clique aqui</a>
          </Password>
        </div>
      </div>
    </BodyAll>
  );
};

export default App;
