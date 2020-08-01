import React from 'react';

import { ButtonSubmit } from './styles';

interface Props {
  type: 'submit';
}

const Button: React.FC<Props> = ({ children, type }) => {
  return <ButtonSubmit type={type}>{children}</ButtonSubmit>;
};

export default Button;
