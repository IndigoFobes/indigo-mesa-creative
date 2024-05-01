"use client";
import Link from "next/link";
// import MediaDropdown from "./media-dropdown";
import React, { useState } from "react";
// import MobileDropdown from "./mobile-menu";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { link } from "fs";

export interface MenuItem {
  title: string;
  route?: string;
  id: number;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "HOME",
    route: "/",
    id: 0,
  },
  {
    title: "ABOUT",
    route: "/about",
    id: 1,
  },
  {
    title: "SERVICES",
    route: "/services",
    id: 2,
  },
  {
    title: "GALLERY",
    route: "/gallery",
    id: 3,
  },
  {
    title: "CONTACT",
    route: "/contact",
    id: 4,
  },
];

export default function Header() {
  const path = usePathname();

  return (
    <motion.header
      className="absolute top-0 right-0 header-bg hidden z-30 w-full md:flex md:flex-col justify-center bg-white dark-border"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute flex justify-center top-0 w-screen text-center text-[var(--light-text-color)] pt-3 lg:pt-8 px-4 header-title">
        <Link href="/" className="header-title link-no-dec dark-text">
          <h1>INDIGO MESA CREATIVE</h1>
        </Link>
      </div>
      {/* only visible on screens medium and larger */}
      <div className="menu-height flex w-screen place-items-end">
        <ul className="hidden w-full font-[500] md:grid grid-cols-5 dark-text text-center pb-4 text-sm md:text-md lg:text-lg">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.id}
                className={`relative menu-item hover:text-[var(--accent-one)] place-self-center link-no-dec ${
                  item.route === path ? `` : `hover-underline-animation`
                }`}
                href={item?.route || ""}
              >
                {item.route === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full -translate-y-[2px] block h-[2px] w-full bg-[var(--dark-theme)]"
                  />
                )}
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </motion.header>
  );
}
