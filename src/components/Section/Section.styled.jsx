import styled from '@emotion/styled';

export const ContactsSection = styled.section`
  margin-top: 12px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: ${props => props.theme.colors.blue};
`;
