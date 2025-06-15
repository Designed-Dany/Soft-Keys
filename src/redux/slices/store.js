import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
	persistStore, 
	persistReducer,
 	FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import favorites from './favoriteSlice';
import filter from './filterSlice';
import search from './searchSlice';
import cart from './cartSlice'
import user from './userSlice'


const rootReducer = combineReducers({
	filter, 
  search, 
  favorites, 
  cart,
  user,
})

const persistConfig = {
	key: 'root',
  version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store) 
export {store, persistor}