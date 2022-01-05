import React from 'react';
import { useHistory } from 'react-router-dom';
// 개발자 라이브러리
import theme from '../../../styles/theme';
// css
import { BackContainer } from '../../../styles/components/common/header';
// images
import { ReactComponent as Back } from '../../../images/common/btn-arrow-back.svg';


const HeaderBack = ({ headerKind, title }) => {
  const history = useHistory();

  return (
    <BackContainer className={headerKind ? headerKind : ''}>
      <div className='btn-back-svg' onClick={() => history.goBack()}>
        <Back 
          width="28"
          height="28"
          fill={`${theme.colors.gray3}`}
        />
      </div>
      {title && <p className='btn-title'>{title}</p>}
    </BackContainer>
  );
};

export default HeaderBack;