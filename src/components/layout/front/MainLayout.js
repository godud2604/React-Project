import React from 'react';
// components
import { NavBottom } from './footer';
import { HeaderNav, HeaderBack } from './header';
// page


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