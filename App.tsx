import React, { useState } from 'react';
import ThemeContext from './src/context/ThemeContext';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  const themeHook = useState('light')

  return (
    <ThemeContext.Provider value={themeHook}>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home />
    </ThemeContext.Provider>
  );
}
