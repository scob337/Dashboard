import SalesChart from "./Chart";

export default function Card_Items() {
    
  return (
    <div className="w-[300px] h-[100%] bg-white lg:w-[500px]">
        <SalesChart 
        private _value : string;
        public get value() : string {
          return this._value;
        }
        public set value(v : string) {
          this._value = v;
        }
         />
    </div>
  )
}

