/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OrderMenu } from '../../../components/detail';
// components
import { SearchBtn } from '../../../components/input';
import { MainLayout } from '../../../components/layout/front';
// css
import { Container } from '../../../styles/order/order';
import { SearchInner } from '../../../styles/order/orderSearch';

const OrderSearch = () => {
  const history = useHistory();

  const [search, setSearch] = useState({
    searchDefault: true, // 기본
    searchNone: false, // 검색결과 없을 때
    searchHave: false, // 검색결과 있을 때
  });

  return (
    <>
      {search.searchNone && (
        <MainLayout 
          headerBack 
          backTitle="막창"
        >
          <Container>
            <SearchInner>
              <SearchBtn searchBtn />
              <div className='order-search-none'>
                <span>최근 검색어가 없습니다.</span>
              </div>
            </SearchInner>
          </Container>
        </MainLayout>
      )}

      {search.searchHave && (
        <MainLayout 
          headerBack 
          backTitle="막창"
        >
          <Container>
            <SearchInner>

              <div className='order-list'>
                <OrderMenu onClick={() => history.push('/detail')}/>
                <OrderMenu />
                <OrderMenu />
                <OrderMenu />
              </div>
            </SearchInner>

          </Container>
        </MainLayout>
      )}
      
      {search.searchDefault && (
        <MainLayout>
          <Container>
            <SearchInner>
              <SearchBtn searchBtn />
              <div className='order-search-none'>
                <span>최근 검색어가 없습니다.</span>
              </div>
            </SearchInner>
          </Container>
        </MainLayout>
      )}
    </>

  );
};

export default OrderSearch;