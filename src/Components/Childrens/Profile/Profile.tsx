import { useSelector } from "react-redux"
import { RootState } from "../../../RTK/store"

export default function Profile() {
    const User = useSelector((state: RootState) => state.User.User)
    return (
        <div className=" w-[96vw] lg:w-[78vw] min-h-[100vh] flex  max-md:flex-col ">

            <div className="img  bg-[#ccc] rounded-lg  
             min-sm:h-[250px]
             min-md:w-[25%] h-[250px]
             p-2
            
            ">
                <img src={User?.avatar} alt="Text"
                    className="w-[200px] h-[200px] object-contain rounded-full m-auto"
                />
            </div>

            <div className=" h-full max-sm:w-full lg:w-[75%]  md:w-[70%] flex flex-col">
                
                <span>{User?.name}</span>
                <span>{User?.email}</span>
                
            </div>


        </div>
    )
}
