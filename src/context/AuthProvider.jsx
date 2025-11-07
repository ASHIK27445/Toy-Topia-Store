import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
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
    const logoutUser = () => {
        return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        createUserEP,
        profileUpdate,
        loginUser,
        user,
        logoutUser
    }
    return(
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
export default AuthProvider