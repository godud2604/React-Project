import React, { useEffect, useState } from 'react';
import Home from '../../../../pages/front/home/Home';
import Footer from '../../footer/Footer';
import HeaderBack from '../../header/HeaderBack';
import HeaderNav from '../../header/HeaderNav';
import Loading from '../../Loading';

const MainLayout = ({ headerNav, headerBack, footer, children, loading }) => {
  const [isLogIn, setIsLogIn] = useState(false); // temp

  useEffect(() => (
    loading && <Loading /> // temp
  ), [loading]);

  return (
    <>
      { !isLogIn ? (
        <Home logInModal />
      ) : (
        <section>
          {headerNav && (
            <HeaderNav />
          )}

          {headerBack && (
            <HeaderBack />
          )}

          {children}

          {footer && <Footer />}
        </section>
      )}
    </>
  );
};

export default MainLayout;