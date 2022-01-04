import React, { useEffect } from 'react';
import Footer from '../../footer/Footer';
import HeaderBack from '../../header/HeaderBack';
import HeaderNav from '../../header/HeaderNav';
import Loading from '../../Loading';

const MainLayout = ({ headerNav, headerBack, footer, children, loading }) => {

  useEffect(() => (
    loading && <Loading />
  ), [loading]);

  return (
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
  );
};

export default MainLayout;