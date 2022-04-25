import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import { NavBottom } from './footer';
import { HeaderNav, HeaderBack } from './header';
// page
import Home from '../../../pages/front/home/Home';


const MainLayout = ({ 
  headerNav, 

  headerBack, 
  backTitle,
  backBg,
  backArrowColor,

  navBottom, 
  navPath,
  navcolor,

  children, 
  loading 
}) => {
  const auth = useSelector((store) => store.auth);
  const history = useHistory();

  if ( auth.authStatus.isLogIn ) {
    return (
      <Home 
        logInModal
        prevPathName={history.location.pathname} 
      />
    )
  }

  return (
    <main>
      {headerNav && (
        <HeaderNav />
      )}

      {headerBack && (
        <HeaderBack 
          backTitle={backTitle}
          backBg={backBg}
          backArrowColor={backArrowColor}
        />
      )}

      {children}

      {navBottom && (
        <NavBottom
          navPath={navPath}
          navcolor={navcolor}
        />
      )}
    </main>
  );
};

export default MainLayout;