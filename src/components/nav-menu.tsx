import React from "react";

export default function NavMenu({
    darkMode,
    setDarkMode,
}: {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <nav
            className={`${
                darkMode ? "text-white" : "text-black"
            } p-4 fixed w-full top-0 left-0 z-50`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or brand */}
                {/* <div className="text-xl font-bold">
                    <a href="/">A</a>
                </div> */}

                {/* Navigation Links */}
                <div className="space-x-4">
                    <a
                        href="#about"
                        className="hover:text-gray-400 transition-all"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-gray-400 transition-all"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-gray-400 transition-all"
                    >
                        Contact
                    </a>
                </div>

                {/* Dark Mode Toggle Button */}
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    );
}
