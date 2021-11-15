import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import home from './screens/home';
import global from './g';
import edit from './screens/edit';
import rootStack from './g/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
 

  return (
    <SafeAreaProvider>
 <NavigationContainer 
 >
    {rootStack()}
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
};



export default App;
