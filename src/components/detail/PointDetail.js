import React from 'react';
// 개발자 라이브러리
import theme from '../../styles/utils/theme';
// css
import { Container } from '../../styles/components/detail/pointDetail';
// images
import { ReactComponent as Minus } from '../../images/common/icon-arrow-minus.svg';
import { ReactComponent as Plus } from '../../images/common/icon-arrow-plus.svg';


const PointDetail = ({
  minus,
  plus,

  date,
  title,
  point,
}) => {
  return (
    <Container>
      <div className='detail-left'>
        { minus 
          ? <Minus /> 
          : <Plus fill={`${theme.colors.yellow}`} />
        }

        <div className='detail-desc'>
          <p className='date'>{date}</p>
          <p className='title'>{title}</p>
        </div>
      </div>

      <div className='detail-point'>
        { minus 
          ? <span className='minus'>-</span> 
          : <span className='plus'>+</span>
        }
        <strong className={minus ? 'minus' : 'plus'}>{point}P</strong>
      </div>
      
    </Container>
  );
};

export default PointDetail;