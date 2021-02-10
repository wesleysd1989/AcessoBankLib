import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button} from '../dist';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          height: '100%',
        }}>
        <Button onPress={() => null}>Test</Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
