import React from 'react';
import { GlobalButton } from '../../styles/components/modal/button';

const CommonButton = ({
  width,
  height,
  margin,
  padding,
  fontSize,

  type,
  kind,
  children,
  onClick,
  disabled,
  RefButton,
  imgSrc,
  borderRadious,
  backgroundColor,
}) => {
  return (
    <GlobalButton
      className={kind}
      type={type}
      ref={RefButton}
      onClick={onClick}
      disabled={disabled}

      width={width}
      height={height}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      radious={borderRadious}
      backgroundcolor={backgroundColor}
    >
      {imgSrc && 
        <div className='global-btn-img'>
          <img src={imgSrc} alt="버튼 이미지" />
        </div>
      }
      
      {children}
    </GlobalButton>
  );
};

export default React.memo(CommonButton);
