import React from 'react';
import { Input } from '.';
import { GlobalSearch } from '../../styles/components/input/search';
import { Button } from '../modal';

const Search = ({ searchBtn }) => {
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

export default Search;