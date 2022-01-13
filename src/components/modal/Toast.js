import React from 'react';
// components
import { Button } from '.';
// css
import { GlobalToast } from '../../styles/components/modal/toast';
// images
import { ReactComponent as Close } from '../../images/common/btn-close.svg';


const Toast = ({ 
  className, 
  title,
  
  children,

  bgClick, 
  closeClick, 
  btnClick 
}) => {
  return (
    <GlobalToast className={className} onClick={bgClick}>
      <div className='global-toast-inner'>
        <div className='toast-head'>
          <div className='svg' onClick={closeClick}>
            <Close fill="#BDBDBD" />
          </div>
          <h2>{title}</h2>
        </div>
        
        <div className='toast-body'>
          {children}
        </div>

        <div className='toast-footer'>
          <Button 
            kind="btn_03"
            children="저장"
            onClick={btnClick}
          />
        </div>
      </div>
    </GlobalToast>
  );
};

export default Toast;