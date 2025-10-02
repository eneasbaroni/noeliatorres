"use client";

import type { WorkItemProps } from "./types";
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
        y: "2.5rem",
    },
    hover: {
        y: "0rem",
        transition: { duration: 0.5 },
    },
};

export const WorkItem = ({ id, imgSrc, brand, link }: WorkItemProps) => {
    return (
        <motion.a
            key={id}
            className="w-1/6 tablet:w-1/3 mobile:w-1/2 h-[50dvh] border relative overflow-hidden p-4 flex flex-col justify-end"
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
                    alt="Portada de trabajo"
                    className="w-full h-full object-cover origin-center"
                    variants={imgVariants}
                />
            </motion.div>
            <motion.div
                className="w-auto flex flex-col z-20"
                variants={infoVariants}
            >
                <h3 className="text-lg mobile:text-base text-white">{brand}</h3>
            </motion.div>
            <motion.div
                className="absolute inset-0 z-10 bg-gray-900"
                variants={divVariants}
            />
        </motion.a>
    );
};
