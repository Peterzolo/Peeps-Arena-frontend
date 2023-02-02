import styled from 'styled-components';

export const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.button`
  color: ${(props) => props.theme.colors.dark};
  font-weight: ${(props) => props.theme.fontWeight.light2};
  font-size: ${(props) => props.theme.fontSize.small};
  width: max-content;
  height: max-content;
  border: 1px solid ${(props) => props.theme.backgroundColors.primaryBg};
  background-color: transparent;
  padding: 15px;
  border-radius: 5px;
`;
