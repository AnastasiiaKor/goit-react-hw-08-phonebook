import styled from '@emotion/styled';
export const Name = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 200px;
`;
export const Phone = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
export const DeleteBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.greyText};
  border-radius: 3px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.greyBtn};
  svg {
    color: ${props => props.theme.colors.greyBorder};
    width: 20px;
    height: 20px;
  }
  :active {
    background-color: ${props => props.theme.colors.blue};
    svg {
      color: ${props => props.theme.colors.light};
    }
  }
`;
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.greyText};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.greyBtn};
  svg {
    color: ${props => props.theme.colors.greyBorder};
    width: 20px;
    height: 20px;
  }
  :active {
    background-color: ${props => props.theme.colors.blue};
    svg {
      color: ${props => props.theme.colors.light};
    }
  }
  :hover {
    border-color: ${props => props.theme.colors.light};
    svg {
      color: ${props => props.theme.colors.light};
    }
  }
`;
