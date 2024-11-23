import { MENU_ITEMS } from "@/lib/config";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <header className="left-0 right-0 top-4 border-[3px] w-[90%] md:w-full mx-auto rounded-2xl shadow-xs bg-indigo-a700 backdrop-blur-md container fixed px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="ml-4 object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            {MENU_ITEMS.map((item, index) => (
              <Link
                className="px-2.5 py-1.5 text-[14px] text-lime-400 hover:rounded-[16px] hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                href={item.href}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex  items-center justify-center gap-[18px] ">
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-xs font-normal text-white-a700">
              Scholastica (1.0.0) is here!
            </p>
            <p className="text-xs font-normal text-lime-400">
              Get this theme today!
            </p>
          </div>
          <div className="h-[16px] w-px bg-white-a700_a5"></div>
          <button className="flex h-[36px] min-w-[94px] flex-row items-center justify-center gap-2 rounded-[18px] bg-lime-400 px-4 text-center text-[12px] hover:bg-lime-300 transition-all duration-200">
            Log in
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}