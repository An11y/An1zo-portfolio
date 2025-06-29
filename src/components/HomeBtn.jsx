"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);
const HomeBtn = () => {
    return (
        <NavLink
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={"/"}
            target={"_self"}
            className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50 group
        shadow-lg hover:shadow-xl transition-all duration-300
        "
            aria-label={"home"}
            name={"home"}
            prefetch={false}
        >
      <span className="relative w-14 h-14 p-4 hover:text-accent transition-colors duration-300">
        <Home className="w-full h-auto transition-transform group-hover:scale-110" strokeWidth={1.5} />

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        <span className="absolute hidden peer-hover:block px-3 py-2 left-full mx-3 top-1/2 -translate-y-1/2 
                        bg-background/90 backdrop-blur-sm text-foreground text-sm rounded-lg shadow-xl 
                        whitespace-nowrap border border-accent/20 animate-in slide-in-from-left-2 
                        duration-200">
          Home
        </span>
      </span>
            <span className="sr-only">Go to Home Page</span>
        </NavLink>
    );
};

export default HomeBtn;