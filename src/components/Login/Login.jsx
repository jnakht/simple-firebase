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
            <button onClick={handleGoogleSignIn} className="btn">Google Login</button>
            <button onClick={handleSignOut}>Sign Out</button>
            {
                user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;