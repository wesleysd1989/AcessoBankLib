import React from 'react';

import {ButtonText, ButtonContainer} from './styles';

const Button = ({onPress, type = 'primary', disabled = false, children}) => {
  let innerChildren = children;

  if (typeof children === 'string') {
    innerChildren = (
      <ButtonText numberOfLines={1} type={type} disabled={disabled}>
        {children}
      </ButtonText>
    );
  }

  return (
    <ButtonContainer onPress={onPress} type={type} disabled={disabled}>
      {innerChildren}
    </ButtonContainer>
  );
};

export default Button;
