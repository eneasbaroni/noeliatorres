"use client";

import type { WorkItemProps } from "./types";
import { motion } from "framer-motion";
import { useWorkItem } from "@/app/hooks";
import {
    containerVariants,
    imgVariants,
    divVariants,
    infoVariants,
} from "@/app/constants";

export const WorkItem = ({ id, imgSrc, brand, link }: WorkItemProps) => {
    const { isActive, handleClick, handleLinkClick } = useWorkItem(id);

    return (
        <motion.div
            key={id}
            data-item-id={id}
            className="group w-1/6 tablet:w-1/3 mobile:w-1/2 h-[50dvh] border relative overflow-hidden p-4 flex flex-col justify-end"
            variants={containerVariants}
            initial="initial"
            animate={isActive ? "hover" : "initial"}
            whileHover="hover"
            onClick={handleClick}
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
                <a
                    className="text-sm mobile:text-xs text-white hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                >
                    Ver Contenido →
                </a>
            </motion.div>
            <motion.a
                className="absolute inset-0 z-10 bg-gray-900 [mobile]:pointer-events-none cursor-pointer"
                variants={divVariants}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            />
        </motion.div>
    );
};
