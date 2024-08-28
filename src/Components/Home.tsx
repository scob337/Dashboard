import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full [100%] h-full  ">
      <Outlet/>
    </div>
  )
}
