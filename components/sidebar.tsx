"use client";

import { cn } from "@/lib/utils";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Infinity, LayoutDashboard, Settings, ShoppingBag } from "lucide-react";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Meta",
    icon: Infinity,
    href: "/meta",
    color: "text-violet-500",
  },
  {
    label: "Shop",
    icon: ShoppingBag,
    href: "/shop",
    color: "text-red-500",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/settings",
    color: "",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo Mayur Hanwate" src="/retainiqlogo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", plus_jakarta_sans.className)}>
            RetainIQ
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm flex p-3 w-full justify-start font-medium cursor-ponter hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-7 w-7 mr-3", route.color)} />
                <p className="text-md max-md:text-sm">{route.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
