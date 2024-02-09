import React, { useState } from "react";

const Header = () => {
  const [signinoption, setsigninoption] = useState(true);
  return (
    <div className="text-white ">
      <div className="">
        <img
          alt="logo"
          className="absolute w-60 bg-gradient-to-t from-gray-900"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        ></img>
      </div>
      <div className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 top-0 p-2 bg-opacity-80 rounded-lg">
        <form className="m-5">
          <h1 className="font-3xl my-2 font-bold">
            {signinoption ? "Sign In" : "Sign Up"}
          </h1>
          {!signinoption && (
            <input
              type="text"
              placeholder="enter your name"
              className="my-4  p-2 w-full rounded-lg bg-gray-700"
            ></input>
          )}
          <input
            type="text"
            placeholder="enter your email"
            className="my-4  p-2 w-full rounded-lg bg-gray-700"
          ></input>
          <input
            type="password"
            placeholder="enter your password"
            className="my-2 p-2 w-full rounded-lg bg-gray-700"
          ></input>
          {!signinoption && (
            <input
              type="number"
              placeholder="enter your mobile number"
              className="my-4  p-2 w-full rounded-lg bg-gray-700"
            ></input>
          )}
          {!signinoption && (
            <input
              type="number"
              placeholder="enter your age"
              className="my-4  p-2 w-full rounded-lg bg-gray-700"
            ></input>
          )}
          <button className="mt-10 p-2  bg-red-600 w-full rounded-lg">
            {" "}
            {signinoption ? "Sign In" : "Sign Up"}{" "}
          </button>
          <p
            onClick={() => setsigninoption(!signinoption)}
            className="my-5 cursor-pointer"
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

export default Header;
