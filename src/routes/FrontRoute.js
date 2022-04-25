import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Home, Member, Phone, Car, Concierge, PointHistory } from '../pages/front/home';

import Coupon from '../pages/front/coupon/Coupon';

import Gift from '../pages/front/gift/Gift';

import { Order, OrderDetail, OrderSearch, StoreSelect } from '../pages/front/order';

import { Login, Signup, FirstAgree, KakaoFirst, KakaoLogin, SignUpComplete } from '../pages/front/account';

function Routes() {
  const { pathname } = useLocation();
  
  // 페이지이동시 스크롤 상단
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <React.Fragment>
      <Switch>
        {/* home */}
        <Route exact path="/" component={Home} />
        {/* home > member */}
        <Route exact path="/member" component={Member} />
        <Route path="/member/phone" component={Phone} />
        <Route path="/member/car" component={Car} />
        <Route path="/member/concierge" component={Concierge} />
        <Route path="/member/pointHistory" component={PointHistory} />


        {/* gift */}
        <Route path="/gift" component={Gift} />


        {/* order */}
        <Route path="/order" component={Order} />
        <Route path="/detail" component={OrderDetail} />
        <Route path="/search" component={OrderSearch} />
        <Route path="/store" component={StoreSelect} />


        {/* coupon */}
        <Route path="/coupon" component={Coupon} />


        {/* account */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/agree" component={FirstAgree} />
        <Route path="/kakao" component={KakaoFirst} />
        <Route path="/account/kakaoLogin" component={KakaoLogin} />
        <Route path="/complete" component={SignUpComplete} />

      </Switch>
    </React.Fragment>
  );
}

export default Routes;