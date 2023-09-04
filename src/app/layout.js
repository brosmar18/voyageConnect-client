import './globals.css';
import { NavBar } from '../components';
import authReducer from '../state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";


export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
