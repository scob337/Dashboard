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
  Toggle: () => void;
  Visible: boolean;
}

export default function NavBar({ Toggle, Visible }: Iprops) {
  const selector = useSelector((state: RootState) => state.User.User);

  const [HideInput, setHideInput] = useState(true);
  const [SearchValue, setSearchValue] = useState("");

  const HandleCloseSearch = () => {
    setSearchValue("");
    setHideInput(true);
  };

  return (
    <div className="min-h-full w-full">
      <Disclosure as="nav" className="w-full">
        <div className="mx-auto max-w-full">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6 w-full">
            <div className="flex items-center w-full lg:w-2/3">
              <div className="flex items-center gap-2 p-3 lg:w-1/2">
                <Logo />
                <label className="relative inline-flex items-center cursor-pointer lg:hidden">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={Visible}
                    onChange={Toggle}
                  />
                  <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                </label>
              </div>
              <div className="hidden lg:flex w-full">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div
                    className="input flex items-center justify-start gap-3 transition-width duration-500 ease-in-out"
                    style={{
                      width: HideInput ? "0" : "170px",
                      overflow: "hidden",
                    }}
                  >
                    <IoIosClose size={24} cursor={"pointer"} onClick={HandleCloseSearch} />
                    <input
                      type="text"
                      placeholder="Enter a Keyword"
                      className="p-1 outline-none border-none w-full"
                      value={HideInput ? "" : SearchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                  <div className="search">
                    <IoMdSearch size={24} cursor={"pointer"} onClick={() => setHideInput(false)} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <Menu as="div" className="relative">
                <MenuButton className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User avatar"
                    src={selector?.avatar}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
