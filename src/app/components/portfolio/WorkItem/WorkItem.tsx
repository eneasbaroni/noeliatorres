"use client";

import { useState } from "react";
import Image from "next/image";
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

const MotionImage = motion.create(Image);

export const WorkItem = ({ id, imgSrc, brand, link, type }: WorkItemProps) => {
    const [isTextHovered, setIsTextHovered] = useState(false);

    return (
        <motion.div
            key={id}
            className="group w-1/6 tablet:w-1/3 mobile:w-1/2 h-[50dvh] border relative overflow-hidden"
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-30 flex flex-col justify-end p-4"
            >
                <motion.div className="absolute inset-0 -z-20 overflow-hidden">
                    <MotionImage
                        src={imgSrc}
                        alt="Portada de trabajo"
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover origin-center"
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
                    <h3 className="text-lg mobile:text-base text-white">
                        {brand}
                    </h3>

                    <motion.div
                        className="relative inline-block overflow-hidden text-sm mobile:text-xs text-white w-fit"
                        onHoverStart={() => setIsTextHovered(true)}
                        onHoverEnd={() => setIsTextHovered(false)}
                        animate={isTextHovered ? "hover" : "initial"}
                    >
                        <motion.span
                            className="block"
                            variants={textSwapVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            Ver Contenido →
                        </motion.span>
                        <motion.span
                            className="absolute left-0 top-0 block font-bold"
                            variants={textSwapUpVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            Ver Contenido →
                        </motion.span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 -z-10 bg-gray-900 opacity-0 group-hover:opacity-30 mobile:opacity-30"
                    variants={divVariants}
                />
            </a>
        </motion.div>
    );
};
