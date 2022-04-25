import React from 'react';
import { useHistory } from 'react-router-dom';
// 개발자 라이브러리
import theme from '../../../../styles/utils/theme';
// css
import { BackContainer } from '../../../../styles/components/layout/headerBack';
// images
import { ReactComponent as Back } from '../../../../images/common/btn-arrow-back.svg';

const HeaderBack = ({ 
  headerKind, 
  backTitle, 
  backBg,
  backArrowColor,
}) => {
  const history = useHistory();

  return (
    <BackContainer 
      className={headerKind ?? ''}
      backBg={backBg}
    >
      <div className='btn-back-svg' onClick={() => history.goBack()}>
        <Back 
          width="28"
          height="28"
          fill={backArrowColor ?? `${theme.colors.gray3}`}
        />
      </div>
      {backTitle && <p className='btn-title'>{backTitle}</p>}
    </BackContainer>
  );
};

export default HeaderBack;