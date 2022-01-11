import React from 'react';
// css
import { SubNavContainer } from '../../../../styles/components/layout/header';

const SubNav = ({
  nav1,
  nav2
}) => {
  return (
    <SubNavContainer>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item is-active'>{nav1}</li>
          <li className='nav-item'>{nav2}</li>
        </ul>
      </nav>
    </SubNavContainer>
  );
};

export default SubNav;