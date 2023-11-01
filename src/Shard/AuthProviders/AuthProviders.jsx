import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
import axios from "axios";

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
            const userEmail = currenUser?.email || user?.email;
            setUser(currenUser);
            setLoadding(false)
            const loginUser = {email: userEmail};
            if(currenUser){
                axios.post('http://localhost:4000/jwt', loginUser, { withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
            else{
                axios.post('http://localhost:4000/logout', loginUser, {
                    withCredentials: true
                } )
                .then( res => {
                    console.log(res.data)
                })
            }
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