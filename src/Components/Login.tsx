import { useState } from "react";
import Logo from "./Logo";
import axios from 'axios';
import Alert from "./Alert";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setUser } from "../RTK/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [Error, setError] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [HidePassword, setHidePassword] = useState(true);
  const [Focus, setFocus] = useState(false);
  const Navigate = useNavigate()
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        {
          username: UserName,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setLogin(true);
      setError(false);
      setTimeout(() => {
        setLogin(false);
        setError(false);
        Navigate("/loading")
      }, 2000);

      const { username, email, avatar, name, token } = response.data;
      localStorage.setItem("user", JSON.stringify({ username, email, avatar, name, token }));
      dispatch(setUser({
        username,
        email,
        avatar,
        name
      }));
    } catch (error) {
      setError(true);
      if (axios.isAxiosError(error) && error.response) {
        setErrorMSG(error.response.data.message);
      } else {
        setErrorMSG("Something went wrong.");
      }

      console.log(error);
    }

  };

  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
      <Logo />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          {(login || Error) && (
            <Alert
              BG={Error ? "red-100" : "green-100"}
              Color={Error ? "red-400" : "green-400"}
              children={Error ? errorMSG : "Logged in successfully"}
              darkBg={Error ? "red-900" : "green-900"}
              darkText={Error ? "red-300" : "green-300"}
              border={Error ? "red-400" : "green-400"}
            />
          )}
          <div>
            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
              UserName
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                required
                autoComplete="username"
                className="
                p-2 font-semibold
                block w-full
                rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className={`p-1 py-1.5 rounded-md mt-2 flex items-center relative w-full ring-1 ring-inset ring-gray-300 ${Focus ? "ring-indigo-600 ring-2 ring-inset" : ""}`}>
              <input
                id="password"
                name="password"
                type={HidePassword ? "password" : "text"}
                required
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="
                p-2 font-semibold
                w-[90%]
                lg:w-[93%] h-full rounded-md py-1.5 text-gray-900 
                sm:text-sm sm:leading-6
                placeholder:text-gray-400 
                border-none outline-none
                "
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span className="absolute right-1">
                {HidePassword ? (
                  <IoIosEye size={28} cursor={"pointer"} onClick={() => setHidePassword(false)} />
                ) : (
                  <IoIosEyeOff size={28} cursor={"pointer"} onClick={() => setHidePassword(true)} />
                )}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
