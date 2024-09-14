import { useState } from "react";
import { Link } from "react-router-dom"
import { MdOutlineShowChart ,MdLibraryBooks,MdOutlineDateRange ,MdOutlinePayment ,MdOutlineSettings  } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

export default function Aside() {

  const AsideData = [
    {
      title: "Dashboard",
      link: "#1",
      icon : <BsGrid1X2 size={24}/>
    },
    {
      title: "Activity",
      link: "#2",
      icon : <MdOutlineShowChart size={24}/>
    },
    {
      title: "Library",
      link: "#3",
      icon : <MdLibraryBooks  size={24}/>
    },
    {
      title: "Schedules",
      link: "#4",
      icon : <MdOutlineDateRange size={24}/>
    },
    {
      title: "Payouts",
      link: "#5",
      icon : <MdOutlinePayment  size={24}/>
    },
    {
      title: "Settings",
      link: "#6",
      icon : <MdOutlineSettings  size={24}/>
    },

  ]
  const [activeItem, setActiveItem] = useState<string | null>("#1");
 
  const Targer = (Item:string)=>{
    setActiveItem(Item)    
  }
  return (
    <div className="flex flex-col justify-between h-[80%]  bg-white">
      

    <ul className="flex flex-col p-2 h-[100%] justify-center items-start gap-5 mt-3 pt-5

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
          flex justify-start items-center gap-2
          p-3 hover:bg-indigo-500 group-hover:text-white  transition w-full cursor-pointer font-semibold`}
         >

            {  item.icon }
            {  item.title}


            </li>

          </Link>

      ))}
    </ul>



      <div className="h-[40%] items-center flex justify-start p-1 group
      ">
        <p
        className="
        rounded-xl
      p-3 hover:bg-indigo-500 hover:text-white  transition w-full cursor-pointer font-semibold
        flex gap-2
        "
        >
          <IoIosLogOut size={24}/>

        Log Out
        </p>
      </div>
    </div>
  )
}
