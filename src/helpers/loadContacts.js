import { collection, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const loadContacts = async () => {
  const collectionRef = collection(FirebaseDB, 'contacts')
  const docs = await getDocs(collectionRef)

  const contacts = []

  docs.forEach((doc) => {
    contacts.push({ ...doc.data(), id: doc.id })
  })

  return contacts
}
