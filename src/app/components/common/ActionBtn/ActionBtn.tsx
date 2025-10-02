"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ActionBtnProps } from "./types";

const bgAnimation = {
    initial: { height: 0 },
    whileHover: { height: "100%" },
};

export const ActionBtn = ({ label, link, mode }: ActionBtnProps) => {
    return (
        <motion.div
            className="border-r border-b relative"
            initial="initial"
            whileHover="whileHover"
        >
            {mode === "internal" ? (
                <Link href={link} className="w-full text-center mobile:text-xs">
                    <motion.div
                        className="w-full absolute bottom-0 bg-white mix-blend-difference"
                        variants={bgAnimation}
                    ></motion.div>
                    <button>{label}</button>
                </Link>
            ) : (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center mobile:text-xs"
                >
                    <motion.div
                        className="w-full absolute bottom-0 bg-white mix-blend-difference"
                        variants={bgAnimation}
                    ></motion.div>
                    <button>{label}</button>
                </a>
            )}
        </motion.div>
    );
};
