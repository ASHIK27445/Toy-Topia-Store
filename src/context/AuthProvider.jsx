import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUserEP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        return updateProfile(auth.currentUser, profile)
                    .then(()=>{setUser({...auth.currentUser})})
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setTimeout(()=>{
                
                setLoading(false)
            }, 2000)
            setUser(user)
        })

        return () => unsubscribe();
    }, [])
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const authInfo = {
        createUserEP,
        profileUpdate,
        loginUser,
        user,
        logoutUser,
        signInWithGoogle,
        loading,
        resetPassword
    }
    return(
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
export default AuthProvider