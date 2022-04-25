import styled from "styled-components";
import { flexbox } from "../../utils";
import theme from "../../utils/theme";

export const Container = styled.section`
  ${flexbox('between')};
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${theme.colors.gray6};
  border-radius: 10px;

  .detail-left {
    ${flexbox()};
    ${theme.Body1};

    svg {
      margin-right: 20px;
    }

    .date {
      margin-bottom: 5px;
    }
  }

  .detail-point {
    span, strong {
      ${theme.SubTitle1};
    }

    span {
      margin-right: 15px;
    }

    .minus {
      color: ${theme.colors.gray3};
    }

    .plus {
      color: ${theme.colors.pink1};
    }
  }
`;
