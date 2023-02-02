import React from 'react';
import styled from 'styled-components';

export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.div`
  background-color: ${(props) => props.theme.backgroundColors.secondaryBg || 'auto'};
  width: max-content;
  height: max-content;
  color: ${(props) => props.theme.colors.light || 'auto'};
  padding: ${(props) => props.theme.padding.fullOne};
  margin-top: 20px;
  border-radius: ${(props) => props.theme.border.rounded};
  /* margin-bottom: ${(props) => props.theme.margin.bottom}; */
`;

export default Card;
