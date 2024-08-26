import { useState } from "react";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

export default function Aside() {

  const AsideData = [
    {
      title: "Home",
      link: "#1"
    },
    {
      title: "Services",
      link: "#2"
    },
    {
      title: "About Us",
      link: "#3"
    },
    {
      title: "Contact",
      link: "#4"
    },
    {
      title: "Blog",
      link: "#5"
    },
    {
      title: "FAQ",
      link: "#6"
    },
    {
      title: "Help Center",
      link: "#7"
    },
    {
      title: "Terms & Conditions",
      link: "#8"
    },
    {
      title: "Privacy Policy",
      link: "#9"
    },
    {
      title: "Cookie Policy",
      link: "#10"
    }
  ]
  const [activeItem, setActiveItem] = useState<string | null>(null);
 
  const Targer = (Item:string)=>{
    setActiveItem(Item)    
  }
  return (
    <div className=" 
    
    " >
      

    <ul className="flex flex-col px-2 h-full justify-center items-start gap-3 mt-3

    ">
      {AsideData.map((item) => (

          <Link 
          key={item.title}
          to={item.link} className="text-sm 
          w-full flex
           hover:text-gray-900 group  transition">
            <li
        onClick={()=> Targer(item.link)}
         className=
        {`${activeItem === item.link ? "text-white bg-indigo-500 " :"text-gray-600 "} 
          rounded-lg  
          flex justify-between items-center
          p-2 hover:bg-indigo-500 group-hover:text-white  transition w-full cursor-pointer font-semibold`}
         >
            {item.title}

            <FaArrowRight />

            </li>

          </Link>

      ))}
    </ul>









    </div>
  )
}
