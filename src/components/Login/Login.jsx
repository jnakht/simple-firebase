import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
            setUser(signedInUser);
        })
        .catch(error => {
            console.log("error: ", error.message)
        })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
            setUser(signedInUser);
        })
        .catch(error => {
            console.log('github error: ', error.message);
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
        <>
            <button onClick={handleGoogleSignIn}>Google Login</button> 
            <button onClick={handleGithubSignIn}>Github Login</button>
        </>
        }
        
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