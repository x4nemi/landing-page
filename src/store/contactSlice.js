import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
  },
})

export const { addContact } = contactsSlice.actions
