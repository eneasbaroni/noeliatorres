"use client";

import type { WorkItemProps } from "./types";
import { motion } from "framer-motion";
import {
    containerVariants,
    imgVariants,
    divVariants,
    infoVariants,
    typeVariants,
    textSwapVariants,
    textSwapUpVariants,
} from "@/app/constants";

export const WorkItem = ({ id, imgSrc, brand, link, type }: WorkItemProps) => {
    return (
        <motion.div
            key={id}
            className="group w-1/6 tablet:w-1/3 mobile:w-1/2 h-[50dvh] border relative overflow-hidden p-4 flex flex-col justify-end"
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
        >
            <motion.div className="absolute inset-0 -z-20 overflow-hidden">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={imgSrc}
                        alt="Portada de trabajo"
                        className="w-full h-full object-cover origin-center"
                        variants={imgVariants}
                    />
                </a>
            </motion.div>
            <motion.div
                className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 mobile:!opacity-100 mobile:!transform-none overflow-hidden"
                variants={typeVariants}
            >
                <span className="text-xs uppercase tracking-wide text-white">
                    {type}
                </span>
            </motion.div>
            <motion.div
                className="w-auto flex flex-col z-20 opacity-0 group-hover:opacity-100 mobile:!opacity-100 mobile:!transform-none"
                variants={infoVariants}
            >
                <h3 className="text-lg mobile:text-base text-white">{brand}</h3>
                <motion.a
                    className="relative inline-block overflow-hidden text-sm mobile:text-xs text-white"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="initial"
                    whileHover="hover"
                >
                    <motion.span
                        className="block"
                        variants={textSwapVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        Ver Contenido →
                    </motion.span>
                    <motion.span
                        className="absolute font-bold left-0 top-0 block"
                        variants={textSwapUpVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        Ver Contenido →
                    </motion.span>
                </motion.a>
            </motion.div>
            <motion.a
                className="absolute inset-0 z-10 bg-gray-900 opacity-0 group-hover:opacity-30 mobile:opacity-30 mobile:pointer-events-none"
                variants={divVariants}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            />
        </motion.div>
    );
};
