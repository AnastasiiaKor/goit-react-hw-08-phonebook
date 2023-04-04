import styled from '@emotion/styled';
export const List = styled.ul`
  list-style: none;
  margin-top: 45px;
  padding: 0;
`;
export const Item = styled.li`
  border-radius: 5px;
  padding: 13px 22px;
  :not(:last-child) {
    margin-bottom: 7px;
  }
  :nth-of-type(odd) {
    background-color: ${props => props.theme.colors.greyBgc};
  }
`;
