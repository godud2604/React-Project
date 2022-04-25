import styled from "styled-components";
import theme from "../utils/theme";
import { flexbox } from "../utils/flexbox";

export const SearchInner = styled.div`
  padding-bottom: 100px;

  .order-search-none {
    ${flexbox()};
    margin-top: 80px;
    ${theme.Body1};
    color: ${theme.colors.black1};
  }

  .order-list {
    ${flexbox()};
    flex-wrap: wrap;

    section {
      width: calc(50% - 10px);
      margin-bottom: 20px;

      &:nth-child(2n+1) {
        margin-right: 20px;
      }
    }
  }
`;
