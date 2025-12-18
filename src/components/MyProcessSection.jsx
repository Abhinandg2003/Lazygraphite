import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";


const processStages = [
    { label: "Sketch", src: "Process/Sketch.png" },
    { label: "Line", src: "Process/Line.png" },
    { label: "Base Color", src: "Process/BaseColor.png" },
    { label: "Shadow & Light", src: "Process/Shadowlight.png" },
    { label: "Render", src: "Process/Render.png" },
    { label: "Edit", src: "Process/Edit.png" },
];

const crossDissolve = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const MyProcessSection = () => {
    const [index, setIndex] = useState(0);

    const paginate = (dir) => {
        setIndex((prev) => {
            const next = prev + dir;
            if (next < 0) return processStages.length - 1;
            if (next >= processStages.length) return 0;
            return next;
        });
    };

    const hasSwiped = useRef(false);

    const startX = useRef(0);

    const stage = processStages[index];

    return (
        <section id="process" className="py-24 px-4">
            <div className="max-w-xl mx-auto text-center space-y-6">

                <h2 className="text-3xl md:text-4xl font-bold">
                    My <span className="text-primary">Process</span>
                </h2>

                {/* Image container */}
                <div
                    className="
            relative mx-auto overflow-hidden rounded-xl
            w-[350px] sm:w-[400px] md:w-[320px]
            aspect-[4/5]
            bg-card
          "
                >
                    <AnimatePresence>
                        <motion.img
                            key={stage.src}
                            src={stage.src}
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            onContextMenu={(e) => e.preventDefault()}
                            style={{ touchAction: "pan-y" }}
                            variants={crossDissolve}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "linear" }}
                            whileTap={{ scale: 0.985 }}
                            className="absolute inset-0 w-full h-full object-cover cursor-pointer select-none"

                            onPointerDown={(e) => {
                                startX.current = e.clientX;
                                hasSwiped.current = false; // reset lock
                            }}

                            onPointerUp={(e) => {
                                if (hasSwiped.current) return;

                                const deltaX = e.clientX - startX.current;
                                if (deltaX > 60) {
                                    paginate(-1);
                                    hasSwiped.current = true;
                                }
                                if (deltaX < -60) {
                                    paginate(1);
                                    hasSwiped.current = true;
                                }
                            }}

                            onPointerLeave={(e) => {
                                if (hasSwiped.current) return;

                                const deltaX = e.clientX - startX.current;
                                if (deltaX > 60) {
                                    paginate(-1);
                                    hasSwiped.current = true;
                                }
                                if (deltaX < -60) {
                                    paginate(1);
                                    hasSwiped.current = true;
                                }
                            }}
                        />



                    </AnimatePresence>
                </div>

                {/* Label – cross-dissolves too */}
                <AnimatePresence mode="popLayout">
                    <motion.p
                        key={stage.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "linear" }}
                        className="text-sm text-muted-foreground"
                    >
                        {stage.label}
                    </motion.p>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex justify-center gap-2 pt-2">
                    {processStages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 w-2 rounded-full transition-all ${i === index
                                ? "bg-primary scale-125"
                                : "bg-foreground/40 hover:bg-muted-foreground"
                                }`}
                        />
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6 pt-4">
                    <button onClick={() => paginate(-1)} className="cosmic-button">
                        Prev
                    </button>
                    <button onClick={() => paginate(1)} className="cosmic-button">
                        Next
                    </button>
                </div>

            </div>
        </section>
    );
};
