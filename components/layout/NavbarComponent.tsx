"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { NAV_LINKS } from "@/constants";
import ButtonComponent from "../common/ButtonComponent";
import LogoComponent from "../common/LogoComponent";

const NavbarComponent = () => {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <LogoComponent />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <ButtonComponent
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        width={32}
        height={32}
        alt="menu"
        onClick={toggleSidebar}
        className="inline-block cursor-pointer lg:hidden"
      />

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed right-0 top-0 bottom-0 w-1/3 bg-white shadow-lg p-5 transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link href={"/"}>
            <LogoComponent />
          </Link>
          <ul className="flex flex-col gap-6 mt-10">
            {NAV_LINKS.map((link) => (
              <Link
                onClick={toggleSidebar}
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-900 cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <ButtonComponent
            type="button"
            onClick={() => {
              router.push("/");
              toggleSidebar();
            }}
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            customStyle="absolute bottom-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
