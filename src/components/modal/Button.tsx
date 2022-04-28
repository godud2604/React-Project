import React from 'react';
// css
import { GlobalButton } from '../../styles/components/modal/button';

interface ButtonProps {
  kind: string;
  children: string;
  width: string;

  height?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  imgSrc?: string;
  borderRadious?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  margin,
  padding,
  fontSize,

  type = 'button',
  kind,
  children,
  onClick,
  disabled,
  imgSrc,
  borderRadious,
  backgroundColor,
}) => {  
  return (
    <GlobalButton
      className={kind}
      type={type}
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
      {/* 일반적인 img 경로 */}
      {typeof(imgSrc) === 'string' && 
        <div className='global-btn-img'>
          <img src={imgSrc} alt="버튼 이미지" />
        </div>
      }

      {/* svg components 형태 */}
      {/* ex) imgSrc={<Phone />} */}
      {typeof(imgSrc) === 'object' && 
        <div className='global-btn-img'>
          {imgSrc}
        </div>
      }
      
      {children}
    </GlobalButton>
  );
};

export default React.memo(Button);
