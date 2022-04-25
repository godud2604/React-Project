import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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

const NavBottom = ({ navPath, navcolor }) => {
  const dispatch = useDispatch();
  const SIDEBAR_STATUS = useSelector((store) => store.sidebar.isSideBar); // 더보기 sidebar

  const handleSideBarClose = () => {
    dispatch(setSideTabStatus(false));
  };

  const handleSideBarToggle = () => {
    dispatch(setSideTabStatus( !SIDEBAR_STATUS ));
  };
  
  return (
    <Container navcolor={navcolor}>
      <NavLink
        to={ navPath ? navPath : '/' }
        exact
        activeClassName={ !SIDEBAR_STATUS ? "nav-active" : undefined }
        className='footer-nav'
        onClick={handleSideBarClose}
      >
        <div className="svg">
          <Home
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>홈</div>
      </NavLink>

      <NavLink
        to='/order' 
        exact
        activeClassName={ !SIDEBAR_STATUS ? "nav-active" : undefined }
        className='footer-nav'
        onClick={handleSideBarClose}
      >
        <div className="svg">
          <Order
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>주문</div>
      </NavLink>

      {/* <NavLink
        to='/gift' 
        exact
        activeClassName={ !SIDEBAR_STATUS ? "nav-active" : undefined }
        className='footer-nav'
        onClick={handleSideBarClose}
      >
        <div className="svg">
          <Gift
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>선물</div>
      </NavLink> */}

      <NavLink
        to='/coupon' 
        exact
        activeClassName={ !SIDEBAR_STATUS ? "nav-active" : undefined }
        className='footer-nav'
        onClick={handleSideBarClose}
      >
        <div className="svg">
          <Coupon
            width="20"
            height="20"
            fill={`${theme.colors.gray3}`}
          />
        </div>
        <div className='footer-nav-txt'>쿠폰</div>
      </NavLink>

      <div 
        className='footer-nav' 
        onClick={handleSideBarToggle}>
        <div className="svg">
          <More
            width="20"
            height="20"
            fill={SIDEBAR_STATUS ? `${theme.colors.orange}` : `${theme.colors.gray3}`}
          />
        </div>
        <div className={ SIDEBAR_STATUS ? 'footer-nav-txt is-active' : 'footer-nav-txt' }>
          더보기
        </div>
      </div>
    </Container>
  );
};

export default NavBottom;