import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 개발자 라이브러리
import theme from '../../../../styles/utils/theme';
import { setSideTabStatus } from '../../../../redux/actions/side';
// css
import { Container } from '../../../../styles/components/layout/footer';
// images
import { ReactComponent as Home } from '../../../../images/common/footer-home.svg';
import { ReactComponent as Order } from '../../../../images/common/footer-coupon.svg';
import { ReactComponent as Gift } from '../../../../images/common/footer-gift.svg';
import { ReactComponent as Coupon } from '../../../../images/common/footer-order.svg';
import { ReactComponent as More } from '../../../../images/common/footer-more.svg';
import { useSelector } from 'react-redux';

const NavBottom = () => {
  const dispatch = useDispatch();
  const SIDEBAR_STATUS = useSelector((store) => store.sidebar.isSideBar);

  const [state, setState] = useState({
    isHome: true,
    isOrder: false,
    isGift: false,
    isCoupon: false,
    isMore: false,
  });

  const handleSideBar = () => {
    dispatch(setSideTabStatus( !SIDEBAR_STATUS ));
  };

  const handleNavStatus = (navInfo) => {
    dispatch(setSideTabStatus(false)); // sidebar 닫기

    // TODO: 오류 수정
    // setState({
    //   isHome: false,
    //   isOrder: false,
    //   isGift: false,
    //   isCoupon: false,
    //   isMore: false,
    // });

    // setState((prevState) => ({
    //   ...prevState,
    //   [navInfo]: true,
    // }));
  };
  
  return (
    <Container>

      <Link 
        to='/' 
        className='footer-nav' 
        onClick={() => handleNavStatus('isHome')}
      >
        <div className="svg">
          <Home
            width="20"
            height="20"
            fill={ state.isHome ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ state.isHome ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>홈</div>
      </Link>

      <Link 
        to='/order' 
        className='footer-nav' 
        onClick={() => handleNavStatus('isOrder')}
      >
        <div className="svg">
          <Order
            width="20"
            height="20"
            fill={ state.isOrder ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ state.isOrder ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>주문</div>
      </Link>

      <Link 
        to='/gift' 
        className='footer-nav' 
        onClick={() => handleNavStatus('isGift')}
      >
        <div className="svg">
          <Gift
            width="20"
            height="20"
            fill={ state.isGift ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ state.isGift ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>선물</div>
      </Link>

      <Link 
        to='/coupon' 
        className='footer-nav' 
        onClick={() => handleNavStatus('isCoupon')}
      >
        <div className="svg">
          <Coupon
            width="20"
            height="20"
            fill={ state.isCoupon ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ state.isCoupon ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>쿠폰</div>
      </Link>

      <div 
        className='footer-nav' 
        onClick={() => {
          handleNavStatus('isMore');
          handleSideBar();
      }}>
        <div className="svg">
          <More
            width="20"
            height="20"
            fill={ state.isMore ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ state.isMore ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>
          더보기
        </div>
      </div>
    </Container>
  );
};

export default NavBottom;