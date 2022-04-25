import React from 'react';
// css
import { Container, DescComponent } from '../../../../../styles/components/home/member/phone/desc';
// images
import { ReactComponent as Phone } from '../../../../../images/common/icon-phone.svg';
import { ReactComponent as Discount } from '../../../../../images/common/icon-discount.svg';
import { ReactComponent as Gift } from '../../../../../images/common/icon-present.svg';
import desc01 from '../../../../../images/home/member/desc-01.jpg'
import desc02 from '../../../../../images/home/member/desc-02.jpg'
import desc03 from '../../../../../images/home/member/desc-03.jpg'

const DescComponents = ({ 
  kind,
  descBg,
  descSvg,

  mainTxt1,
  mainTxt2,
  subTxt,

  bg,
}) => {
  return (
    <DescComponent 
      className={kind ?? 'desc-content'}
      bg={bg}
    >
      <div className='desc-content-img'>
        <img src={descBg} alt={mainTxt2 ? mainTxt1 + mainTxt2 : mainTxt1} />
      </div>
      
      <div className='desc-content-txt'>
        {descSvg}
        <span>
          {mainTxt1} <br/>
          {mainTxt2}
        </span>
        <p>{subTxt}</p>
      </div>
    </DescComponent>
  )
};

const Desc = () => {
  return (
    <Container>
      <DescComponents 
        descBg={desc01}
        descSvg={<Phone stroke='#FFBF00' />}
        mainTxt1="갤럭시 S21 부터"
        mainTxt2="아이폰13 까지"
        subTxt="원하는 모든 기종 구매가 가능합니다."
        bg="rgba(247, 227, 170, 0.5)"
      />
      <DescComponents 
        kind="order-change"
        descBg={desc02}
        descSvg={<Discount fill='#F49FB7' />}
        mainTxt1="적립된 포인트로"
        mainTxt2="최대 20만원 할인"
        bg="rgba(240, 189, 203, 0.5)"
      />
      <DescComponents 
        descBg={desc03}
        descSvg={<Gift fill='#000000' />}
        mainTxt1="사은품 혜택 제공"
        mainTxt2=""
        bg="rgba(243, 185, 149, 0.5)"
      />
    </Container>
  );
};

export default Desc;