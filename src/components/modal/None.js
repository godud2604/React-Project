import React from 'react';
// css
import { GlobalNone } from '../../styles/components/modal/none';
// images
import { ReactComponent as No } from '../../images/common/icon-content-none.svg';

const None = ({ 
  message, 
  
  margin,
}) => {
  return (
    <GlobalNone margin={margin}>
      <No />
      <p className='global-none-message'>{message}</p>
    </GlobalNone>
  );
};

export default None;