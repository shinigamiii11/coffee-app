import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from '../features/coffeeSlice';

const store = configureStore({
    reducer: {
        coffee: coffeeSlice
    },
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(),
    devTools: process.env.NODE_ENV !== 'production'
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;