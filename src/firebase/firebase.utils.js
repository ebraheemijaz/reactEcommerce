import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyB6gUzZmn7LcQgYJi956Thrwh9254_qfy8',
    authDomain: 'react-ecommerce-site-c0098.firebaseapp.com',
    databaseURL: 'https://react-ecommerce-site-c0098.firebaseio.com',
    projectId: 'react-ecommerce-site-c0098',
    storageBucket: 'react-ecommerce-site-c0098.appspot.com',
    messagingSenderId: '652789439167',
    appId: '1:652789439167:web:cc15a8d439620f341b840a',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
