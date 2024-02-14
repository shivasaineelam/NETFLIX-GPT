import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGOUT_LOGO, NETFLIX_LOGO } from "../utils/Constants";
import { gptpagechange } from "../utils/GPTSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showgptpage = useSelector((store) => store.gpt.showgptpage);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="absolute w-screen z-30 bg-gradient-to-b from-black ">
      <div className="flex justify-between ">
        <div className="">
          <img alt="logo" className=" w-36  " src={NETFLIX_LOGO}></img>
        </div>

        {user && (
          <div className="mx-4 cursor-pointer justify-between flex w-64">
            <div>
              <button
                className="bg-purple-700 p-2 m-2 rounded-lg "
                onClick={() => {
                  dispatch(gptpagechange(!showgptpage));
                }}
              >
                {showgptpage ? "HomePage" : "GPTpage"}
              </button>
            </div>
            <img
              alt="logo2"
              className="w-12 rounded-lg"
              src={LOGOUT_LOGO}
            ></img>
            <button
              onClick={logout}
              className="bg-gray-400 m-2 text-white rounded-lg p-2"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
