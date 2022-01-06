import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 개발자 라이브러리
import theme from '../../../styles/utils/theme';
import { logoutRequest } from '../../../redux/actions/auth';
// css
import { Container } from '../../../styles/components/common/footer';
// images
import { ReactComponent as Home } from '../../../images/common/footer-home.svg';
import { ReactComponent as Coupon } from '../../../images/common/footer-coupon.svg';
import { ReactComponent as Gift } from '../../../images/common/footer-gift.svg';
import { ReactComponent as Order } from '../../../images/common/footer-order.svg';
import { ReactComponent as More } from '../../../images/common/footer-more.svg';

const NavBottom = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to='/' className='footer-nav'>
        <div className="svg">
          <Home
            width="20"
            height="20"
            fill={`${theme.colors.orange}`}
          />
        </div>
        <div className='footer-nav-txt is-active'>홈</div>
      </Link>
      <Link to='/order' className='footer-nav'>
        <div className="svg">
          <Coupon
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>주문</div>
      </Link>
      <Link to='/gift' className='footer-nav'>
        <div className="svg">
          <Gift
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>선물</div>
      </Link>
      <Link to='/coupon' className='footer-nav'>
        <div className="svg">
          <Order
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>쿠폰</div>
      </Link>
      <div className='footer-nav'>
        <div className="svg">
          <More
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt' onClick={() => dispatch(logoutRequest())}>
          더보기
        </div>
      </div>
    </Container>
  );
};

export default NavBottom;