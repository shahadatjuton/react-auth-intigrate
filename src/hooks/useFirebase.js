import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut  } from "firebase/auth";
import { useEffect, useState } from "react"
import firebaseInitialize from "../Firebase/firebase.initialize";

firebaseInitialize()

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn =(e)=>{
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setUser(user);
        }).catch((error)=>{
            setError(error.message);
        })        
    }
    const signingOut =()=>{
        console.log('ok')
        signOut(auth)
        .then(()=>{
            setUser({});
            console.log('sign out');
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log('efect' ,user)
                setUser(user);
            }
        })
    },[]);

    
    return {
        user,
        error,
        googleSignIn,
        signingOut
        
    }
}

export default useFirebase

