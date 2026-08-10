"use client";

import { bgAnimation } from "@/app/constants";
import { FILTERS } from "./contants";
import { WorkFilterProps } from "./types";
import { motion } from "motion/react";

export const WorkFilter = ({ activeFilter, onChange }: WorkFilterProps) => {
    return (
        <div className="fixed top-4 mobile:top-auto mobile:bottom-4 left-0 right-0 z-50 w-full flex justify-center">
            <div className="flex bg-white/40 backdrop-blur-sm border border-black/80 border-r-0">
                {FILTERS.map((filter) => (
                    <motion.div
                        key={filter.value}
                        className="relative overflow-hidden cursor-pointer border-r border-black/80"
                        initial="initial"
                        whileHover="whileHover"
                    >
                        <motion.div
                            className="absolute bottom-0 left-0 w-full bg-white mix-blend-difference"
                            variants={bgAnimation}
                        />
                        <button
                            onClick={() => onChange(filter.value)}
                            className={`relative px-4 py-1.5 text-sm transition-colors ${
                                activeFilter === filter.value
                                    ? "text-black bg-blue-900/20"
                                    : "text-black"
                            }`}
                        >
                            {filter.label}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
