import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import { Button } from '../../../modal';
// css
import { NavContainer } from '../../../../styles/components/layout/headerNav';

const HeaderNav = ({ headerKind }) => {
  const history = useHistory();

  return (
    <NavContainer className={headerKind ?? ''}>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item is-active' onClick={() => history.push('/')}>먹플</li>
          <li className='nav-item' onClick={() => history.push('/member')}>멤버쉽</li>
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
    </NavContainer>
  );
};

export default HeaderNav;