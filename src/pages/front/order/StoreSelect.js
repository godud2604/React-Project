import React, { useState } from 'react';
// components
import { OrderStore } from '../../../components/detail';
import { SearchBtn } from '../../../components/input';
import { MainLayout } from '../../../components/layout/front';
import { SubNav } from '../../../components/layout/front/header';
// css
import { Container } from '../../../styles/order/order';
import { StoreSelectInner } from '../../../styles/order/storeSelect';

const StoreSelect = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const subNavInfo = [
    {
      "id": 1,
      "title": '전체 매장',
    },
    {
      "id": 2,
      "title": '자주 찾는 매장',
    },
  ];
  
  return (
    <MainLayout headerBack backTitle="매장선택" navBottom>
      <Container>
        <StoreSelectInner>
          <SearchBtn />
          
          <div className='store-nav'>
            <SubNav 
              nav={subNavInfo}
              toggleState={toggleState}
              toggleTab={toggleTab}
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