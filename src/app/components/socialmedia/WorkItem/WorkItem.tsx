"use client";

import type { SocialMediaItemProps } from "./types";
import { motion } from "framer-motion";

const containerVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1,
        transition: { duration: 0.3 },
    },
};

const imgVariants = {
    initial: {
        scale: 1.05,
    },
    hover: {
        scale: 1.15,
        transition: { duration: 0.5 },
    },
};

const divVariants = {
    initial: {
        opacity: 0,
    },
    hover: {
        opacity: 0.3,
        transition: { duration: 0.5 },
    },
};

const infoVariants = {
    initial: {
        y: "2.2rem",
    },
    hover: {
        y: "0rem",
        transition: { duration: 0.5 },
    },
};

export const WorkItem = ({
    id,
    title,
    year,
    works,
    imgSrc,
    link,
}: SocialMediaItemProps) => {
    return (
        <motion.a
            key={id}
            className="w-1/2 h-[50dvh] mobile:w-full border relative overflow-hidden p-4 flex flex-col justify-end"
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div className="absolute inset-0 -z-20 overflow-hidden">
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover origin-center"
                    variants={imgVariants}
                />
            </motion.div>
            <motion.div
                className="w-auto flex flex-col z-20"
                variants={infoVariants}
            >
                <h3 className="text-xl mobile:text-lg text-white">
                    {title} {year}
                </h3>
                <ul className="flex flex-col gap-2 text-white">
                    {works.map((work, index) => (
                        <li key={index} className="text-sm mobile:text-xs">
                            {work}
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
                className="absolute inset-0 z-10 bg-gray-900"
                variants={divVariants}
            />
        </motion.a>
    );
};
