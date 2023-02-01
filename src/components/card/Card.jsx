import React from 'react';
import styled from 'styled-components';

import './Card.scss';

export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  // eslint-disable-next-line react/jsx-no-undef
  return <Components {...rest}>{children}</Components>;
};

const Components = styled.div``;

export default Card;
