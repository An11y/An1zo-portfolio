import {
    Github,
    Home,
    Linkedin,
    NotebookText,
    Palette,
    Phone,
    Twitter,
    User,
} from "lucide-react";

import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";



const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5} />;
        case "about":
            return <User className="w-full h-auto" strokeWidth={1.5} />;
        case "projects":
            return <Palette className="w-full h-auto" strokeWidth={1.5} />;
        case "contact":
            return <Phone className="w-full h-auto" strokeWidth={1.5} />;
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5} />;
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
        case "telegram":
            return (
                <svg
                    className="w-full h-auto transition-colors  hover:text-accent" // Hover will change the text color
                    strokeWidth={1.5}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                >
                    <path
                        d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409"
                        stroke="currentColor" // Ensure it uses currentColor
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "resume":
            return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
        default:
            return <Home className="w-full h-auto" strokeWidth={1.5} />;
    }
};



const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
                       x,
                       y,
                       label,
                       link,
                       icon,
                       newTab,
                       labelDirection = "right",
                   }) => {
    return (
        <ResponsiveComponent>
            {({ size }) => {
                return size && size >= 480 ? (
                    <div
                        className="absolute cursor-pointer z-50 pointer-events-auto"
                        style={{ transform: `translate(${x}, ${y})` }}
                    >
                        <NavLink
                            variants={item}
                            href={link}
                            target={newTab ? "_blank" : "_self"}
                            className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
                            aria-label={label}
                            name={label}
                            prefetch={false}
                            scroll={false}
                        >
              <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent hover:stroke-accent">
                {getIcon(icon)}

                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
                        </NavLink>
                    </div>
                ) : (
                    <div className="w-fit cursor-pointer z-50 pointer-events-auto">
                        <NavLink
                            variants={item}
                            href={link}
                            target={newTab ? "_blank" : "_self"}
                            className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
                            aria-label={label}
                            name={label}
                            prefetch={false}
                            scroll={false}
                        >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent hover:stroke-accent">
                {getIcon(icon)}

                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                    className={clsx(
                        "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                        labelDirection === "left" ? "right-full left-auto" : ""
                    )}
                >
                  {label}
                </span>
              </span>
                        </NavLink>
                    </div>
                );
            }}
        </ResponsiveComponent>
    );
};

export default NavButton;