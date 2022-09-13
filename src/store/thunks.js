import { addContact } from './ContactSlice'

export const startNewContact = (contact) => {
  return (dispatch) => {
    dispatch(addContact(contact))
    // console.log(contact)
  }
}
