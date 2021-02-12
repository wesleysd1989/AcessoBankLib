import React from 'react';
import renderer from 'react-test-renderer';

import {Button} from '../../lib';

describe('Button', () => {
  test('Deve ocorrer um match entre o componente Button e seu snapshot quando são passados valores padrões.', () => {
    const tree = renderer
      .create(<Button onPress={() => null}>Test</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
