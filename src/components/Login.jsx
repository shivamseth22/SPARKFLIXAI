import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const heandleButtonClick = () => {
    // Validate the  form
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign in Sign up logic
    if (!isLogged) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isLogged ? "Sign In" : "Sign Up"}
        </h1>

        {!isLogged && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-black"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg text-black"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg text-black  "
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4  bg-red-700 w-full rounded-lg"
          onClick={heandleButtonClick}
        >
          {isLogged ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isLogged
            ? "New to sparkflix.AI? Sign Up Now"
            : "Already a User Sign In Now !!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
