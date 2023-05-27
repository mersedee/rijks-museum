import { configureStore } from '@reduxjs/toolkit'
import { artApi } from '@/redux/art.ts'

export const store = configureStore({
  reducer: {
    [artApi.reducerPath]: artApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
