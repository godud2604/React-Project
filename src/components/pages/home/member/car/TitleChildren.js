import React from 'react';
// css
import { Container } from '../../../../../styles/components/home/member/car/titleChildren';

const TitleChildren = ({
  title,
  children,
}) => {
  return (
    <Container>
      <div className='titleChildren-title'>
        <h2>{title}</h2>
      </div>

      {children}
    </Container>
  );
};

export default TitleChildren;