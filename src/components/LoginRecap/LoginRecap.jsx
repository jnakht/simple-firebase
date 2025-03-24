import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebaseRecap.init";
import { GoogleAuthProvider } from "firebase/auth";

const LoginRecap = () => {
    const auth  = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleGoogleLoginRecap = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error is: ', error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLoginRecap} className="btn">Google Login Recap</button>
        </div>
    );
};

export default LoginRecap;