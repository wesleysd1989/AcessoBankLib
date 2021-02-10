import styled from 'styled-components/native';
import {theme} from '../../../constants/theme';

export const ButtonContainer = styled.TouchableHighlight.attrs((props) => ({
  underlayColor: theme.button[props.type].hoverColor,
}))`
  background-color: ${(props) =>
    props.disabled
      ? props.type === 'primary'
        ? theme.colors.disabled
        : theme.button[props.type].color
      : theme.button[props.type].color};
  min-height: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  letter-spacing: -0.4px;
  text-align: center;
  color: ${(props) =>
    props.disabled && props.type !== 'primary'
      ? theme.colors.disabled
      : theme.button[props.type].textColor};
`;
