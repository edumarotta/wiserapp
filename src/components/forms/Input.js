import React from 'react';
import './Input.css';
import styled from 'styled-components';

const InputForm = styled.input`
  width: 256px;
  height: 48px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
`;

const LabelForm = styled.input`
  width: 72px;
  height: 14px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  text-transform: uppercase;
`;

const Input = ({ id, label, setValue, type, ...props }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <br></br>
      <InputForm
        type={type}
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </p>
  );
};

export default Input;
