"use client";
import { Easing, motion } from "motion/react";
import { MenuProps } from "./types";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { links } from "./constants";

const menuAnim = {
    initial: { opacity: 1, y: "-100%", borderRadius: "0 0 30% 30%" },
    animate: {
        opacity: 1,
        y: "0%",
        borderRadius: "0 0 0% 0%",
    },
    exit: {
        opacity: 1,
        y: "-100%",
        borderRadius: "0 0 30% 30%",
    },
};

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] as Easing };

const Menu = ({ active, closeMenu }: MenuProps) => {
    return (
        <motion.div
            className="fixed w-full h-screen flex flex-col justify-center items-center bg-black z-50"
            variants={menuAnim}
            initial="initial"
            animate={active ? "animate" : "exit"}
            transition={transition}
        >
            <ul className="w-full text-white flex flex-col justify-center items-center border-b border-b-white">
                {links.map((link) => (
                    <MenuItem
                        key={link.label}
                        link={link.link}
                        label={link.label}
                        closeMenu={closeMenu}
                    />
                ))}
            </ul>
        </motion.div>
    );
};
export default Menu;
