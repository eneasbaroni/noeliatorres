"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { MenuItemProps } from "./types";

const bgAnimation = {
    initial: { height: 0 },
    whileHover: { height: "100%" },
};

export const MenuItem = ({ link, label, closeMenu }: MenuItemProps) => (
    <motion.li
        className="w-full h-auto py-2 border-t border-t-white text-center relative"
        initial="initial"
        whileHover="whileHover"
        onClick={closeMenu}
    >
        <Link
            href={link}
            className="w-full block mobile:text-sm text-white relative mix-blend-difference z-50 font-thin"
        >
            {label}
        </Link>
        <motion.div
            className="w-full absolute bottom-0 bg-white"
            variants={bgAnimation}
        ></motion.div>
    </motion.li>
);
