import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
