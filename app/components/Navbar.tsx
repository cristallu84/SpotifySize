"use client";
import Image from "next/image";
import React from "react";
import Home from "../images/home.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const route = usePathname();
  const tabs = `transition ml-10 hover:text-sky-400 text-xl`;

  return (
    <nav className="w-full h-16 bg-transparent">
      {/* Replace with Logo and "Spotisize" that we can design */}
      <div className="flex justify-between items-center h-full w-full px-5 2xl:px-4">
        <Link href="/">
          <Image
            src={Home}
            alt="Home"
            width="50"
            height="50"
            className="cursor-pointer"
            priority
          />
        </Link>

        <div>
          <ul className="hidden md:flex pr-8">
            <Link href="/">
              <li className={`${tabs} ${textColour(route, "/")}`}>Home</li>
            </Link>
            <Link href="/about">
              <li className={`${tabs} ${textColour(route, "/about")}`}>
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className={`${tabs} ${textColour(route, "/contact")}`}>
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function textColour(route: string, selected: string) {
  return route == selected ? "text-sky-400" : "text-white hover:scale-110";
}
