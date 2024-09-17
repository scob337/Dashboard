import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./RTK/store";
import Aside from "./Components/Aside";

export const MainLayOut = () => {
  const Login = useSelector((state: RootState) => state.User.Login);
  // const selector = useSelector((state: RootState) => state.User.User);

  const Navigate = useNavigate();
  useEffect(() => {
    if (!Login) {
      Navigate("/login");
    }
  }, [Navigate, Login]);




  const [isAsideVisible, setIsAsideVisible] = useState(false);

  // دالة لتبديل حالة الـ Aside
  const toggleAside = () => {
    console.log(isAsideVisible)
    setIsAsideVisible(!isAsideVisible);

  };




  return (
    <>

      <NavBar Toggle={toggleAside} Visible={isAsideVisible} />

      <section className="w-full  grid grid-cols-5 gap-4 min-h-[100vh] bg-[#f0f5fa]">

        <div
          className={`
          bg-white
          col-span-1 h-full z[9999]  shadow-lg transform transition-all duration-300 ease-in-out absolute
          ${isAsideVisible ? 'absolute top-[60px] z-[99999] left-0 w-[45.5%] md:w-[228px] lg:w-[100%] lg:relative' : 'w-0 overflow-hidden lg:w-[100%] lg:relative'}
           lg:w-[100%] lg:relative 

        `}

        >
          <Aside />
        </div>

        <div className={`lg:col-span-4 sm:w-[100%]  lg:w-1/3  `}>
          <Outlet />
        </div>

      </section>

      <Footer />
    </>
  );
};
