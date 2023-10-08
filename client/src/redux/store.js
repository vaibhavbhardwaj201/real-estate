import userReducer from './user/userSlice'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {user: userReducer},
//   middleware: (getDefaultMiddleware) => {
//     getDefaultMiddleware({
//         serializableCheck: false,
//     })
//   }
})