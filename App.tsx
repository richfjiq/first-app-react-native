import React from 'react';
import { SafeAreaView } from 'react-native';
// import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';
import { HomeworkScreen } from './src/screens/HomeworkScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      <HomeworkScreen />
    </SafeAreaView>
  );
};
