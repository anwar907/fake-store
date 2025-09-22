import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'

export const appStore = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type AppRootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch