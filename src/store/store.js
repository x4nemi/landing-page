import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from './ContactSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
})
