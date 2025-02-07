"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { HexagonsCore } from "@/components/ui/background-hexagons";
import NavMenu from "@/components/nav-menu";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <ParallaxProvider>
            <div
                className={`${
                    darkMode ? "bg-black text-white" : "bg-white text-black"
                } min-h-screen transition-all relative`}
            >
                <NavMenu darkMode={darkMode} setDarkMode={setDarkMode} />

                {/* Hero Section */}
                <section
                    id="about"
                    className="flex flex-col justify-center items-center h-screen relative"
                >
                    <div className="fixed top-24 right-20 scale-20">
                        <HexagonsCore />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-bold"
                    >
                        Annabelle Chen
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xl mt-4"
                    >
                        Full-stack Developer
                    </motion.p>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 px-8">
                    <h2 className="text-4xl font-semibold text-center mb-10">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            "Harmony",
                            "Circles",
                            "Qwerkey",
                            "Wandermap",
                            "Notion User Documentation",
                        ].map((project, index) => (
                            <Parallax key={index} speed={-10}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="p-6 border rounded-lg cursor-pointer transition-all"
                                >
                                    <h3 className="text-2xl font-medium">
                                        {project}
                                    </h3>
                                    <p className="mt-2 text-gray-500"></p>
                                </motion.div>
                            </Parallax>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="text-center py-20">
                    <h2 className="text-4xl font-semibold">Get in Touch</h2>
                    <p className="mt-4 text-gray-500">
                        Reach out via email or LinkedIn.
                    </p>
                </section>
            </div>
        </ParallaxProvider>
    );
}
