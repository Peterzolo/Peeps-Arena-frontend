import styled from 'styled-components';

export const Text = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.p`
  color: ${(props) => props.theme.colors.dark};
  font-weight: ${(props) => props.theme.fontWeight.light2};
  font-size: ${(props) => props.theme.fontSize.small};
`;
