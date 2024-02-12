import React from "react";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkVaildData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../utils/Constants";

const Login = () => {
  const [validdata, setvaliddata] = useState(null);
  const name = useRef();
  const [signinoption, setsigninoption] = useState(true);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const moblieNumber = useRef();
  const age = useRef();
  const [showpassword, setshowpassword] = useState(false);

  const handleButtonClick = () => {
    const res = checkVaildData(email.current.value, password.current.value);
    setvaliddata(res);
    if (res) return;
    if (!signinoption) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use")
            setvaliddata("Email already exist!!! Please Login");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential")
            setvaliddata("Invalid Credentials");
        });
    }
  };

  return (
    <div className="text-white">
      <Header />
      <img alt="homepage" src={HOME_PAGE}></img>
      <div className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 top-0 p-2 bg-opacity-80 rounded-lg">
        <form className="m-5" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-3xl my-2 font-bold">
            {signinoption ? "Sign In" : "Sign Up"}
          </h1>

          {!signinoption && (
            <div>
              <input
                type="text"
                ref={name}
                placeholder="enter your name"
                className="my-4  p-2 w-full rounded-lg bg-gray-700"
              ></input>
            </div>
          )}
          <input
            type="text"
            placeholder="enter your email"
            ref={email}
            className="my-4  p-2 w-full rounded-lg bg-gray-700"
          ></input>
          <div>
            <input
              ref={password}
              type={showpassword ? "text" : "password"}
              placeholder="enter your password"
              className="my-2 p-2 w-full rounded-lg bg-gray-700"
            ></input>
            <span
              className="relative bottom-10 left-[275px] cursor-pointer"
              onClick={() => setshowpassword(!showpassword)}
            >
              {
                !showpassword ? "open" : "close"
                // <FontAwesomeIcon icon="fa-solid fa-eye" className="text-4xl" >/
              }
            </span>
          </div>
          {!signinoption && (
            <input
              ref={moblieNumber}
              type="number"
              placeholder="enter your mobile number"
              className="my-4  p-2 w-full rounded-lg bg-gray-700"
            ></input>
          )}
          {!signinoption && (
            <input
              ref={age}
              type="number"
              placeholder="enter your age"
              className="my-4  p-2 w-full rounded-lg bg-gray-700"
            ></input>
          )}
          {validdata && (
            <p className="m-2 text-2xl text-bold text-red-800">{validdata}</p>
          )}
          <button
            className="mt-10 p-2  bg-red-600 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {signinoption ? "Sign In" : "Sign Up"}{" "}
          </button>
          <p
            onClick={() => setsigninoption(!signinoption)}
            className="my-5  cursor-pointer"
          >
            {signinoption
              ? "New to Netflix ?sign up"
              : "Already a user ? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
