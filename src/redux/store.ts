import { configureStore } from '@reduxjs/toolkit';
import sneakers from './sneakers/slice';
import currency from './currency/slice';
import filters from './filters/slice';
import cart from './cart/slice';
import wish from './wish/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sneakers,
    currency,
    filters,
    cart,
    wish,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
