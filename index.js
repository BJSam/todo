import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import store,{persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react';

const RootRedux = ()=>{
    return <Provider {...{store}}>
     <PersistGate loading={null} persistor={persistor}>
     <App/>
     </PersistGate>
      {/* <App/> */}
 </Provider>
 }
AppRegistry.registerComponent(appName, () => RootRedux);
