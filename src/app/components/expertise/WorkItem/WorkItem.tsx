"use client";

import type { SocialMediaItemProps } from "./types";
import { motion } from "framer-motion";
import {
    containerVariants,
    imgVariants,
    divVariants,
    infoSocialMediaVariants,
} from "@/app/constants";

export const WorkItem = ({
    id,
    title,
    year,
    works,
    imgSrc,
    link,
}: SocialMediaItemProps) => {
    return (
        <motion.div
            key={id}
            className="group w-1/2 h-[50dvh] mobile:w-full border relative overflow-hidden p-4 flex flex-col justify-end"
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
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
                className="w-auto flex flex-col z-20 opacity-0 group-hover:opacity-100 mobile:!opacity-100 mobile:!transform-none"
                variants={infoSocialMediaVariants}
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
