import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Loginslice";
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

const Store = configureStore({
  reducer: {
    mylogdata: persistedReducer,
  },
});

const persistor = persistStore(Store);

export { Store, persistor };
