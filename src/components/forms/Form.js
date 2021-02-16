import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const [email, setEmail] = React.useState('');
  const [password, setSenha] = React.useState('');

  return (
    <form className="form">
      <Input
        id="email"
        label="email"
        value={email}
        setValue={setEmail}
        placeholder="user.name@mail.com"
        required
      />

      <Input
        id="senha"
        label="senha"
        value={password}
        setValue={setSenha}
        placeholder="****"
        required
      />

      <Button />
    </form>
  );
};

export default Form;
