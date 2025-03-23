/***
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app(create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: do not make public your firebase config file by pushing on public repository or something else
 * 7. visit: go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 11. import googleAuthProvider and create new authProvider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign in method: Build > sign-in-method > (google, facebook, etc) > activate
 * 14. replace 127.0.0.1 ip address with localhost, it is validated by  firebase even though both are same
 *  */