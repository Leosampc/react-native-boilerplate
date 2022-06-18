import React from 'react';
import { ThemeProvider } from './providers';
import AppNavigator from './navigation';

function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
