import { useEffect } from "react";
import Bar from "./Bar";
import Card_Items from "./Card_Items";
import CardsChart from "./CardsChart";
import { useSelector } from "react-redux";
import { RootState } from "../../../RTK/store";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const Login = useSelector((state: RootState) => state.User.Login);
  const Navigate = useNavigate()

  useEffect(() => {
    if (!Login) {
      Navigate("/login");
    }
  }, [Login, Navigate]);

  return (
        <div className="w-[70vw] sm:min-h[1000px] lg:min-h-[40%]  flex flex-col gap-8 items-center justify-center ml-5">
          <div  className="w-[70vw] min-h-[40vh] lg:h-[40vh] lg:flex justify-center  lg:justify-between mt-10  gap-4 items-center">
          <Card_Items/>
          <CardsChart/>
          </div>
          <Bar/>
          
    </div>  


  )
}
