import React from 'react';

import { Button } from './styles';

interface Props {
  href: string;
}

const ButtonLink: React.FC<Props> = ({ href, children }) => {
  return <Button to="/cadastro/video">{children}</Button>;
};

export default ButtonLink;
