import { FaEye ,FaBullseye,FaHandPaper } from "react-icons/fa";

interface DataItem {
    title: string;
    count: string;
    date: string;
    icon: JSX.Element;
    color: string;
  }
  
  // تعريف المصفوفة من نوع DataItem
  type DataArray = DataItem[];

export default function CardsChart() {

    const data: DataArray =[
        {
            title:'Impressions',
            count:"1,563",
            date :"May 23 - June 01 (2017)",
            icon : <FaEye size={24}/>,
            color:"#4099ff"
        },
        {
            title:'Goal',
            count:"30,564",
            date :"May 23 - June 01 (2017)",
            icon : <FaBullseye size={24}/>,
            color:"#2ed9b7"
        },
        {
            title:'Impact',
            count:"42.6%",
            date :"May 23 - June 01 (2017)",
            icon : <FaHandPaper size={24}/>,
            color:"#ffb54d"
        },

    ]
  return (
    <div className="flex flex-col items-center sm:w-[48%] lg:w-[fit-content] justify-start m-auto gap-[20px] mt-3  ">
        {data.map(el =>{
            return (
                <div key={el.title} className={`
                w-full 
                lg:w-[300px]
                flex flex-row items-center justify-between gap-2 p-2 bg-white rounded-md shadow-md cursor-pointer`}>
                    <article className="flex flex-col">
                    <p>{el.title}</p>
                    <p
                     style={{ color: el.color , fontWeight:600, fontSize:"26px" }}
                    >{el.count}</p>
                    <p>{el.date}</p>
                    </article>
                    <div
                     style={{ backgroundColor: el.color }}
                    
                    className={`flex items-center justify-center w-10 h-10 rounded-lg text-white
                         
                         `
                        
                         }>
                        {el.icon}
                    </div>

                </div>
            )
        })}
        
    </div>  
  )
}
