import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRouter from './src/routes/TabRouter'; 

function App() {
  return (
    <NavigationContainer>
      <TabRouter /> 
    </NavigationContainer>
  );
}

export default App; 
