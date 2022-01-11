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
  children, 
  loading 
}) => {
  const auth = useSelector((store) => store.auth);
  const history = useHistory();

  return (
    <>
      { !auth.authStatus.isLogIn ? (
        <>
          <Home 
            logInModal
            prevPathName={history.location.pathname} 
          />
        </>
      ) : (
        <main>
          {headerNav && (
            <HeaderNav />
          )}

          {headerBack && (
            <HeaderBack 
              title={backTitle}
              bg={backBg}
              backArrowColor={backArrowColor}
            />
          )}

          {children}

          {navBottom && <NavBottom/>}
        </main>
      )}
    </>
  );
};

export default MainLayout;