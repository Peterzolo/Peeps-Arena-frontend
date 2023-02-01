import React from 'react';
import styled from 'styled-components';

import './Card.scss';

export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.div`
  background-color: ${(props) => props.theme.backgroundColors.primaryBg || 'auto'};
  width: max-content;
  height: max-content;
  color: ${(props) => props.theme.colors.light || 'auto'};
`;

export default Card;
