import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    isLoading: false,
    errorMessage: null,
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
      state.isLoading = false
    },

    savingNewContact: (state) => {
      state.isLoading = true
    },
    setError: (state, action) => {
      state.error = action.payload
    },

    setContacts: (state, action) => {
      state.contacts = action.payload
      state.isLoading = false
    },
  },
})

export const { addContact, setError, savingNewContact, setContacts } =
  contactsSlice.actions
