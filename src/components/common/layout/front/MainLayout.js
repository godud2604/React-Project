import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import NavBottom from '../../footer/NavBottom';
import HeaderBack from '../../header/HeaderBack';
import HeaderNav from '../../header/HeaderNav';
// page
import Home from '../../../../pages/front/home/Home';


const MainLayout = ({ headerNav, headerBack, navBottom, children, loading }) => {
  const auth = useSelector((store) => store.auth);

  return (
    <>
      { !auth.authStatus.isLogIn ? (
        <Home logInModal />
      ) : (
        <main>
          {headerNav && (
            <HeaderNav />
          )}

          {headerBack && (
            <HeaderBack />
          )}

          {children}

          {navBottom && <NavBottom />}
        </main>
      )}
    </>
  );
};

export default MainLayout;