import React from 'react';
import { useHistory } from 'react-router-dom';
// css
import { Container } from '../../../../styles/components/home/member/point';
// images
import { ReactComponent as RightArrow } from '../../../../images/common/btn-arrow-right.svg';

const Point = () => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push('/member/pointHistory')}>
      <span>포인트 25,000P</span>
      <RightArrow
        width="14px"
        height="16px"
        fill="#f2f2f2"
      />
    </Container>
  );
};

export default Point;