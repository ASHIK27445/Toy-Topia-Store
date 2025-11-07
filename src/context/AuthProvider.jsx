import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUserEP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        return updateProfile(auth.currentUser, profile)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            toast('state change')
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        createUserEP,
        profileUpdate,
        loginUser
    }
    return(
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
export default AuthProvider