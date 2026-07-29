"use client";

import type { WorkItemProps } from "./types";
import { motion } from "framer-motion";
import {
    containerVariants,
    imgVariants,
    divVariants,
    infoVariants,
    typeVariants,
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
                <motion.img
                    src={imgSrc}
                    alt="Portada de trabajo"
                    className="w-full h-full object-cover origin-center"
                    variants={imgVariants}
                />
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
                <a
                    className="text-sm mobile:text-xs text-white hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver Contenido →
                </a>
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
