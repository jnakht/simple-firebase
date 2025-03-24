import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
            setUser(signedInUser);
        })
        .catch(error => {
            console.log("error: ", error.message)
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
        {user ? <button onClick={handleSignOut}>Sign Out</button> 
        :
        <button onClick={handleGoogleSignIn}>Google Login</button>}
        
            {
                user && <div style={{border: '2px solid red'}}>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img style={{border: '2px solid green', width: '200px', height: '200px'}} src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;