import styled from 'styled-components';

export const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-weight: ${(props) => props.theme.fontWeight.light2};
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 20px;
`;
