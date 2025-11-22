import React from "react";

export default function CoreValuesSection() {
    return (
        <header className="w-full flex items-center justify-center py-12">
        <h1 className="text-shadow-sm text-white whitespace-nowrap flex flex-col md:flex-row items-center justify-center font-serif text-6xl md:text-8xl lg:text-9xl leading-tight">
            <span>Our</span>
            <span className="hidden md:inline mx-4">&nbsp;</span>
            <span className="italic">Values</span>
        </h1>
        </header>
    );
}
