import React, { useEffect, useState } from 'react';
// components
import NavBottom from '../../footer/NavBottom';
import HeaderBack from '../../header/HeaderBack';
import HeaderNav from '../../header/HeaderNav';
import Loading from '../../Loading';
// page
import Home from '../../../../pages/front/home/Home';


const MainLayout = ({ headerNav, headerBack, navBottom, children, loading }) => {
  const [isLogIn, setIsLogIn] = useState(false); // temp

  useEffect(() => (
    loading && <Loading /> // temp
  ), [loading]);

  return (
    <>
      { !isLogIn ? (
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