import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from '../pages/front/home/Home';
import Login from '../pages/front/account/Login';
import Coupon from '../pages/front/coupon/Coupon';
import Gift from '../pages/front/gift/Gift';
import Order from '../pages/front/order/Order';

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
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/coupon" component={Coupon} />
        <Route path="/gift" component={Gift} />
        <Route path="/order" component={Order} />
        <Route path="/coupon" component={Coupon} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;