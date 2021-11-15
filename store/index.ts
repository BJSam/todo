import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import thunk from "redux-thunk" 
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState ={};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
    initialState,
    applyMiddleware(thunk)
)
const persistor = persistStore(store)
export default store;
export {persistor}