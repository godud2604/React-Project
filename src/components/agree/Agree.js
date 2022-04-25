import React from 'react';
// 개발자 라이브러리
import theme from '../../styles/utils/theme';
// css
import { Agreement } from '../../styles/account/signup';
// images
import { ReactComponent as CheckOff } from '../../images/common/btn-check-off.svg';
import { ReactComponent as CheckOn } from '../../images/common/btn-check-on.svg';

const Agree = ({ txt1, txt2 }) => {
  return (
    <Agreement>
      <p className='agree-txt'>
        {txt1} <br />
        {txt2}
      </p>

      <div className='agree-wrap'>
        <hr />

        <div className='agree-content agree-main'>
          <div className='agree-img'>
            <CheckOff 
              stroke={`${theme.colors.gray3}`} 
            />
          </div>
          <span className='agree-all-txt'>모두 동의합니다.</span>
        </div>

        <hr />

        <div className='agree-content agree-sub'>
          <div className='agree-img'>
            <CheckOn fill={`${theme.colors.orange}`} />
          </div>
          <span className='agree-sub-txt'>(필수)드림컨시어지 이용약관</span>
        </div>

        <div className='agree-content agree-sub'>
          <div className='agree-img'>
            <CheckOff 
              stroke={`${theme.colors.gray3}`} 
            />
          </div>
          <span className='agree-sub-txt'>(필수)개인정보 수집 및 이용동의</span>
        </div>
      </div>
    </Agreement>
  );
};

export default Agree;