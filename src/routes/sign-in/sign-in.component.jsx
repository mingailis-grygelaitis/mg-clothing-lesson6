import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
      const userDocRef = await createUserDocumentFromAuth(response.user);
      console.log(userDocRef);
    } catch (error) {
      console.log("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
