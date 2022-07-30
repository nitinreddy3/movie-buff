import styled from "styled-components";

export const StyledTable = styled.table`
  caption-side: top;
  border-collapse: collapse;

  caption-side: bottom;

  tbody {
    vertical-align: center;
  }
  td,
  th {
    border: 1px solid;
    width: 33%
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #fff;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;