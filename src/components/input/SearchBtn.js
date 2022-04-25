import React from 'react';
// components
import { Input } from '.';
import { Button } from '../modal';
// css
import { GlobalSearch } from '../../styles/components/input/search';

const SearchBtn = ({ searchBtn }) => {
  return (
    <GlobalSearch>
      <Input 
        searchIcon
        placeholder="검색"
      />

      { searchBtn && (
        <Button 
          kind="btn_07"
          children="취소"
          width="48px"
        />
      )}
    </GlobalSearch>
  );
};

export default SearchBtn;