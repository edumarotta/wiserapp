import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

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
      <br />
      <input type="password" placeholder="*****"></input>

      <Button />
    </form>
  );
};

export default Form;
