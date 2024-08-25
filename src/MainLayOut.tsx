import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./RTK/store";

export const MainLayOut = () => {
  const Login = useSelector((state: RootState) => state.User.Login);
  // const selector = useSelector((state: RootState) => state.User.User);

  const Navigate = useNavigate();
  useEffect(() => {
    if (!Login) {
      Navigate("/login");
    }
  }, [Navigate, Login]);
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
};
