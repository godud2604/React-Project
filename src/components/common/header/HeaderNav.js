import React from 'react';
import { Container } from '../../../styles/components/common/header';
import { Button } from '../modal';

const HeaderNav = ({ headerKind }) => {
  return (
    <Container className={headerKind ? headerKind : ''}>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item is-active'>먹플</li>
          <li className='nav-item'>멤버쉽</li>
        </ul>
      </nav>

      <div className='header-btn'>
        <Button 
          kind="btn_05"
          width="54px"
          height="26px"
          fontSize="12px"
          children={'가이드'}
        />
      </div>
    </Container>
  );
};

export default HeaderNav;