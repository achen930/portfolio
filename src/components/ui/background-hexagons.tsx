"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HexagonsCore = ({
    className,
    ...rest
}: {
    className?: string;
}) => {
    const rows = new Array(10).fill(1);
    const cols = (i: number) => new Array(10 - Math.abs(6 - i)).fill(1);
    let colors = ["#A7C7E7", "#FACBD0", "#C9E5C0", "#C3B1E1"];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-50%,-50%) rotate(-20deg) scale(0.8)`,
            }}
            className={cn(
                "absolute left-1/2 top-1/2 flex flex-col items-center w-full h-full",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className="flex justify-center"
                    style={{
                        transform: `translateX(${
                            (5 - Math.abs(5 - i)) * 10
                        }px)`,
                    }}
                >
                    {cols(i).map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: getRandomColor(),
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="w-20 h-20 border border-gray-400"
                            style={{
                                clipPath:
                                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            }}
                        />
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export const Hexagons = React.memo(HexagonsCore);
