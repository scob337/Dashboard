import { Outlet, useNavigate } from "react-router-dom"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "./RTK/store"
import Logo from "./Components/Logo"

export const MainLayOut = () => {
  const Login =  useSelector((state: RootState) => state.User.Login)
  const selector = useSelector((state: RootState) => state.User.User);

const Navigate= useNavigate()
useEffect(()=>{
  if(!Login){
    Navigate("/login")
  }
},[Navigate , Login ])
  return (
    <>
      <NavBar/>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <Logo/>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={selector?.avatar}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{selector?.name}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Bankdash</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
      <Footer/>
    </>
  )
}
