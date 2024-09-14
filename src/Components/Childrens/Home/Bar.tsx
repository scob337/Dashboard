interface Idata {
    Name: string;
    number: string;
    incnumb: string;
    bardWith: string;
    Textcolor: string;
    BarColor: string;
  }
  
  type TData = Idata[];
  
  export default function Bar() {
    const data: TData = [
      {
        Name: "Published Project",
        number: "532",
        incnumb: "+1.69%",
        bardWith: "30%",
        Textcolor: "#22c55e",
        BarColor: "#ef4444"
      },
      {
        Name: "Completed Task",
        number: "4,569",
        incnumb: "-0.5%",
        bardWith: "60%",
        Textcolor: "#ef4444",
        BarColor: "#1e3a8a"
      },
      {
        Name: "Successfull Task",
        number: "89%",
        incnumb: "+0.99%",
        bardWith: "80%",
        Textcolor: "#22c55e",
        BarColor: "#22c55e"
      },
      {
        Name: "Ongoing Project",
        number: "365",
        incnumb: "+0.35%",
        bardWith: "50%",
        Textcolor: "#22c55e",
        BarColor: "#f59e0b"
      }
    ];
  
    return (
      <div className="bg-white flex 
      flex-col lg:flex-row mb-10 lg:mb-2  
      gap-8 justify-between items-center w-[100%] h-fit m-auto ">
        {data.map((el, index) => {
          return (
            <div key={index} className="flex items-center justify-between p-3 gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#333] text-[1.125rem]">
                  {el.Name}
                </h1>
  
                <div className="text-[#333] text-[1.125rem] flex justify-between gap-2">
                  <span className="font-semibold text-[24px]">{el.number}</span>
                  <span className="font-semibold text-[24px]" style={{ color: el.Textcolor }}>{el.incnumb}</span>
                </div>
                
                <div className="w-[100%] h-2 rounded relative bg-gray-300 flex items-center">
                  <div
                    className="h-1 rounded relative before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-white before:right-0 before:top-[0] before:translate-y-[-30%]"
                    style={{
                      width: el.bardWith,
                      backgroundColor: el.BarColor,
                      boxShadow: `0 0 0 3px ${el.BarColor}` // استخدم boxShadow لجعل ring ديناميكي
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
    