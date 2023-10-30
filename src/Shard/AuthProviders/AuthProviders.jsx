import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadding, setLoadding] = useState(true);

    const createUser = (email, password )=>{
        setLoadding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        setLoadding(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, currenUser =>{
            setUser(currenUser);
            setLoadding(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const info = {
        user, 
        loadding, 
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;