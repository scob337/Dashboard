import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-[100%] h-full  m-auto">
      <Outlet/>
    </div>
  )
}
