"use client";
import { motion } from "motion/react";
import { MenuProps } from "./types";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { links } from "./constants";
import { menuAnim, transition } from "@/app/constants";

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
