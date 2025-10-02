import { Easing } from "motion/react";

export const menuAnim = {
    initial: { opacity: 1, y: "-100%", borderRadius: "0 0 30% 30%" },
    animate: {
        opacity: 1,
        y: "0%",
        borderRadius: "0 0 0% 0%",
    },
    exit: {
        opacity: 1,
        y: "-100%",
        borderRadius: "0 0 30% 30%",
    },
} as const;

export const transition = {
    duration: 1,
    ease: [0.76, 0, 0.24, 1] as Easing,
} as const;

export const containerVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1,
        transition: { duration: 0.3 },
    },
} as const;

export const imgVariants = {
    initial: {
        scale: 1.05,
    },
    hover: {
        scale: 1.15,
        transition: { duration: 0.5 },
    },
} as const;

export const divVariants = {
    initial: {
        opacity: 0,
    },
    hover: {
        opacity: 0.4,
        transition: { duration: 0.5 },
    },
} as const;

export const infoVariants = {
    initial: {
        y: "3.6rem",
    },
    hover: {
        y: "0rem",
        transition: { duration: 0.5 },
    },
} as const;

export const infoSocialMediaVariants = {
    initial: {
        y: "3.3rem",
    },
    hover: {
        y: "0rem",
        transition: { duration: 0.5 },
    },
} as const;
