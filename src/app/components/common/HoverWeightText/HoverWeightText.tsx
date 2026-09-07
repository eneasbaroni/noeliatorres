"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "motion/react";
import { groteskVariable } from "@/app/fonts";

const PROXIMITY_RADIUS = 220;
const WEIGHT_FAR = 300;
const WEIGHT_NEAR = 700;

type LetterProps = {
    char: string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
};

const Letter = ({ char, mouseX, mouseY }: LetterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const center = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const measure = () => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) return;
            center.current = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            };
        };
        measure();
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure, { passive: true });
        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("scroll", measure);
        };
    }, []);

    const distance = useTransform([mouseX, mouseY], (latest) => {
        const [x, y] = latest as [number, number];
        const dx = x - center.current.x;
        const dy = y - center.current.y;
        return Math.hypot(dx, dy);
    });
    const weightRaw = useTransform(
        distance,
        [0, PROXIMITY_RADIUS],
        [WEIGHT_NEAR, WEIGHT_FAR]
    );
    const weight = useSpring(weightRaw, {
        stiffness: 220,
        damping: 24,
        mass: 0.4,
    });
    const fontVariationSettings = useMotionTemplate`'wght' ${weight}`;

    if (char === " ") {
        return <span className="inline-block w-[0.3em]"> </span>;
    }

    return (
        <motion.span
            ref={ref}
            className={`${groteskVariable.className} inline-block`}
            style={{ fontVariationSettings }}
        >
            {char}
        </motion.span>
    );
};

type HoverWeightTextProps = {
    text: string;
    className?: string;
};

export const HoverWeightText = ({ text, className }: HoverWeightTextProps) => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <h1 className={className} aria-label={text.replace(/\n/g, " ")}>
            {text.split("\n").map((line, li) => (
                <span key={li} className="block">
                    {line.split("").map((char, i) => (
                        <Letter
                            key={i}
                            char={char}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </span>
            ))}
        </h1>
    );
};

export default HoverWeightText;
