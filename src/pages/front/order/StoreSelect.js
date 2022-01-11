import React from 'react';
import { OrderStore } from '../../../components/detail';
// components
import Search from '../../../components/input/Search';
import { MainLayout } from '../../../components/layout/front';
import { SubNav } from '../../../components/layout/front/header';
// css
import { Container, StoreSelectInner } from '../../../styles/order/order';

const StoreSelect = () => {

  return (
    <MainLayout headerBack backTitle="매장선택" navBottom>
      <Container>
        <StoreSelectInner>
          <Search />
          
          <div className='store-nav'>
            <SubNav 
              nav1="전체 매장"
              nav2="자주 찾는 매장"
            />
          </div>

          <div className='store-list'>
            <OrderStore className='store-item'/>
            <OrderStore className='store-item'/>
            <OrderStore className='store-item'/>
          </div>

        </StoreSelectInner>
      </Container>
    </MainLayout>
  );
};

export default StoreSelect;