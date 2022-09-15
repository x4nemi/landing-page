import {
  addContact,
  savingNewContact,
  setContacts,
  setError,
} from './ContactSlice'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'
import { loadContacts } from '../helpers'

export const startNewContact = (contact) => {
  return async (dispatch) => {
    dispatch(savingNewContact())

    const newDoc = doc(collection(FirebaseDB, 'contacts'))
    await setDoc(newDoc, contact)

    // console.log({ newDoc, setDocResp })

    dispatch(addContact(contact))
  }
}

export const startLoadingContacts = () => {
  return async (dispatch) => {
    // dispatch(savingNewContact())

    const contacts = await loadContacts()

    dispatch(setContacts(contacts))
  }
}
