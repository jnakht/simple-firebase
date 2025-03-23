import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('google is coming');
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn">Google Login</button>
        </div>
    );
};

export default Login;