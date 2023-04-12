import styled from '@emotion/styled';

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: ${props => props.theme.colors.blue};
`;

export default function Home() {
  return <Title>Welcome to Phonebook Application</Title>;
}
