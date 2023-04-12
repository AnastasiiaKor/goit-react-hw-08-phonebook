import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: ${props => props.theme.colors.blue};
`;

export const Container = styled.div`
  width: 1024px;
  padding: 30px 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
