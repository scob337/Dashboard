import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import Logo from "./Logo";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import { useState } from "react";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
interface Iprops {
Toggle: () => void
  Visible:boolean
}
export default function NavBar({ Toggle , Visible }:Iprops) {
  const selector = useSelector((state: RootState) => state.User.User);
  console.log(selector);

  const [HideInput, setHideInput] = useState(true);
  const [SearchValue, setSearchValue] = useState("");
  const HandleCloseSearch = () => {
    setSearchValue("");
    setHideInput(true);
  };
  console.log(Visible)
  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="w-full">
          <div className="mx-auto max-w-full  ">
            <div className="flex h-16 items-center justify-between w-[100%]  ">
              <div className="flex items-center w-[500px] lg:w-[64.5%]   h-full ">
                <div className="flex items-center justify-start gap-2  p-3  lg:w-[40%]  h-full  ">

                  <Logo />

                  <label className="relative inline-flex items-center cursor-pointer lg:hidden"
                  
                  >
                    <input type="checkbox" value="" className="sr-only peer" 
                    checked={Visible}
                    onChange={ Toggle}
                    />
                    <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                  </label>
                </div>
                <div className=" hidden lg:flex w-fit">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    <div
                      className={`input flex items-center justify-start gap-3 transition-width duration-500 ease-in-out`}
                      style={{
                        width: HideInput ? "0" : "170px",
                        overflow: "hidden",
                      }} 
                    >
                      <IoIosClose
                        size={24}
                        cursor={"pointer"}
                        onClick={HandleCloseSearch}
                      />
                      <input
                        type="text"
                        placeholder="Enter a Keyword"
                        className="p-1 outline-none border-none"
                        style={{ width: "100%" }}
                        value={HideInput ? "" : SearchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>

                    <div className="search">
                      <IoMdSearch
                        size={24}
                        cursor={"pointer"}
                        onClick={() => setHideInput(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-[70%] p-4">
                <div className=" flex items-center justify-end">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt="اثس"
                          src={selector?.avatar}
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden"></div>
            </div>
          </div>
        </Disclosure>
      </div>
    </>
  );
}
