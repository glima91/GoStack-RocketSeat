import React from 'react';

import { Container } from './styles';

interface TootipsProps{
  title: string;
  className?: string;
}

const Tooltip: React.FC<TootipsProps> = ({ title, className = '', children}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>);
}

export default Tooltip;