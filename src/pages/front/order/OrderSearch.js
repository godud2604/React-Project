import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OrderMenu } from '../../../components/detail';
// components
import Search from '../../../components/input/Search';
import { MainLayout } from '../../../components/layout/front';
// css
import { Container, SearchInner } from '../../../styles/order/order';

const OrderSearch = () => {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
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
              <Search searchBtn />
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
              <Search searchBtn />
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