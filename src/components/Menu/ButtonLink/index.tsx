import React from 'react';

interface Props {
  className: string;
  href: string;
}

const ButtonLink: React.FC<Props> = ({ className, href, children }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default ButtonLink;
