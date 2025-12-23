import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const journeyTimeline = [
    {
        type: "text",
        content:
            "I didn’t start out knowing what I wanted to become. The journey was full of confusion and self doubt. Yeah, I was the 'Art Kid' ever since I remember. But, I think everybody loved art when they were kids without even knowing what that is. But as I grew I realised that I was more than just an 'Art kid', I was living for it.🌱"
    },
    {
        type: "media",
        title: "2018",
        media: [
            { src: "Journey/2018.jpeg", kind: "image" }
        ]
    },
    {
        type: "text",
        content:
            "I always drew and created for fun, I used to do pencil sketches, doodles, and even small video edits. When I got a smart phone, I discovered about digital art and animations. Like every artist, I started in 'Ibis paint' and I did small animations in 'Flipaclip'. I did a lot of animations and doodles. But at that time I was doing it out of curiosity like a toddler. With no stylus or proper references used, I'm still proud of those artworks.🐣"
    },
    {
        type: "media",
        title: "2019",
        media: [
            { src: "Journey/animation2019.mp4", kind: "video" }
        ]
    },
    {
        type: "text",
        content:
            "I continued doing digital painting and sketches, It was at that time I found out about the grid system to draw on paper. I drew a lot of drawing using the grid system. I also did digital art mostly by tracing images. But I didn't feel guilty or anything at that time, I didn't want to learn, But I wanted to create. I even started do glue my drawings onto walls (foreshadowing😅). It was at that time I created an Instagram art account, and I started to upload the drawings I do to that account.🐾"
    },

    {
        type: "media",
        title: "2020",
        media: [
            { src: "Journey/2020-1.png", kind: "image" },
            { src: "Journey/2020-2.png", kind: "image" },
            { src: "Journey/2020-3.png", kind: "image" },
        ]
    },

    {
        type: "text",
        content:
            "This was the stage I really got pulled into art, I was like 'I have to learn this'. I Bought a basic pen tablet (Huion HS64, I still use this😅). I was using my brother's old laptop. It was so laggy in Photoshop, so I had to use Clip Studio Paint. I was really amused by other great artists' works, and then self doubt came in. I was so doubtful of myself that i didn't know if I could do good. I stood Inside my comfort zone. I traced images and tried stylizing without even knowing the fundamentals. I did create art, but I  wasn't really satisfied with what I created. I still posted it on Instagram and showed my friends. My friends and family really encouraged me. Even though there were downs, with my people's motivation, I continued creating.🐥"
    },

    {
        type: "media",
        title: "2021",
        media: [
            { src: "Journey/2021-1.png", kind: "image" },
            { src: "Journey/2021-2.png", kind: "image" },
            { src: "Journey/2021-3.png", kind: "image" },
            { src: "Journey/2021-4.png", kind: "image" },
            { src: "Journey/2021-5.png", kind: "image" },
            { src: "Journey/2021-6.png", kind: "image" },
        ]
    },

    {
        type: "text",
        content:
            "After becoming tired with broken stylisations and boring tracings, I finally started to learn the fundamentals. After a bunch of YouTube tutorials, books, inspirations and a lot of patience and practice, I started to make my fundamentals strong. I Started learning about the facial planes, the human anatomy, line weight, color theory, compositions and everything. I bought a new laptop and switched to Photoshop from Clip Studio Paint. I learned a lot from YouTubers like Angel Ganev, Proko, Samdoesarts etc as well as from the book 'Drawing the head and hands' by Andrew Loomis. But I still had a lot to learn. I tried stylisations but it was still broken.🍃"
    },

    {
        type: "media",
        title: "2022",
        media: [
            { src: "Journey/2022-1.png", kind: "image" },
            { src: "Journey/2022-2.png", kind: "image" },
            { src: "Journey/2022-3.png", kind: "image" },
            { src: "Journey/2022-4.png", kind: "image" },
            { src: "Journey/2022-5.png", kind: "image" },
            { src: "Journey/2022-6.png", kind: "image" },
        ]
    },

    {
        type: "text",
        content:
            "Although I was so focused on learning, art was always an escape from my real life and responsibilities. It was at this time, I really learned about stylizations, that stylization is something that distinguishes one's art from others. Mainly inspired from 'Samdoesarts' I started to work on my stylizations more. Apart from that, I started to incorporate my culture (South Indian) into my artworks mainly by sarees. And that really helped with my motivation to go further, because when I started incorporating this culture I started getting more likes on Instagram. Then I started drawing more sarees😅. It was at that time I realised I could do things. But I still thought I deserved more than what I was getting, so self doubt followed me everywhere.🌾"
    },

    {
        type: "media",
        title: "2023",
        media: [
            { src: "Journey/2023-1.png", kind: "image" },
            { src: "Journey/2023-2.png", kind: "image" },
            { src: "Journey/2023-3.png", kind: "image" },
            { src: "Journey/2023-4.png", kind: "image" },
            { src: "Journey/2023-5.png", kind: "image" },
            { src: "Journey/2023-6.png", kind: "image" },
            { src: "Journey/2023-7.png", kind: "image" },
            { src: "Journey/2023-8.png", kind: "image" },
            { src: "Journey/2023-9.png", kind: "image" },
        ]
    },

    {
        type: "text",
        content:
            "Even though I was enjoying digital art, I started doing animations too. I began to animate the characters I drew and I found happiness from that too. And most importantly my audiences liked the animations. So I didn't stop making animations. But the breakpoint wasn't the animations yet. One digital painting I did (Zephyr) suddenly blew up on Instagram. I started getting more likes, engagement and followers. So I was really motivated to create more, I started getting more exposure, not only getting likes and follows, I started to make connections with people in the community. It was at this time I also stopped running from my responsibilities and started to draw backgrounds. But with good exposure came a villain called 'Perfectionism'. I became doubtful again. I was always asking myself 'Is this enough?'. But I knew I had to keep going.🌻"
    },

    {
        type: "media",
        title: "2024",
        media: [
            { src: "Journey/2024-1 comp.mp4", kind: "video" },
            { src: "Journey/2024-2 comp.mp4", kind: "video" },
            { src: "Journey/2024-3 comp.mp4", kind: "video" },
            { src: "Journey/2024-4.png", kind: "image" },
            { src: "Journey/2024-5.png", kind: "image" },
            { src: "Journey/2024-6.png", kind: "image" },
            { src: "Journey/2024-7.png", kind: "image" },
            { src: "Journey/2024-8.png", kind: "image" },
            { src: "Journey/2024-9.png", kind: "image" },
        ]
    },

    {
        type: "text",
        content:
            "I was aware that if I want to go to the next level, I had to step out of my comfort zone. At some point I was thinking 'Am I doing this only for likes? Am I losing passion for art?'. Well, that is still unanswered. But I want to keep my passion alive as long as I'm alive.  I started making short animated series. And after a couple of series, 'Paper hearts' Went viral (Kinda). Even though it wasn't much views comparing to those huge views other artists were getting, I was happier than ever.  But even though the short stories got more responses, I continued making digital artworks. I wanted to improve the compositions and colors even more. Yeah, I still compare myself to other great artists, I judge my artworks by its likes, I still doubt about myself, even though I don't want to. Apart from my Computer Science career, I want to be known as an artist as well. Can I do it? As luffy said 'As long as I live, there are infinite chances'.🪐"
    },

    {
        type: "media",
        title: "2025",
        media: [
            { src: "Journey/2025-1 comp.mp4", kind: "video" },
            { src: "Journey/2025-2 comp.mp4", kind: "video" },
            { src: "Journey/2025-3 comp.mp4", kind: "video" },
            { src: "Journey/2025-4.png", kind: "image" },
            { src: "Journey/2025-5.png", kind: "image" },
            { src: "Journey/2025-6.png", kind: "image" },
            { src: "Journey/2025-7.png", kind: "image" },
            { src: "Journey/2025-8.png", kind: "image" },
            { src: "Journey/2025-9.png", kind: "image" },
        ]
    },
];



export const JourneySection = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="journey" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Art <span className="text-primary">Journey</span>
                </h2>

                <motion.div
                    layout
                    className={`relative overflow-hidden transition-all ${!expanded ? "mask-fade" : ""
                        }`}
                    initial={false}
                    animate={{
                        maxHeight: expanded ? 40000 : 360,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1], // premium easing
                    }}
                >
                    <motion.div layout className="space-y-5 text-muted-foreground text-lg">
                        {journeyTimeline.map((item, index) => {
                            if (item.type === "text") {
                                return (
                                    <p
                                        key={index}
                                        className="leading-relaxed text-justify hyphens-auto md:tracking-wide"

                                    >

                                        {item.content}
                                    </p>
                                );
                            }

                            if (item.type === "media") {
                                const isMultiple = item.media.length > 1;

                                return (
                                    <motion.div
                                        key={index}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-4 mb-3 md:mb-3"
                                    >
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-center text-foreground">
                                            {item.title}
                                        </h3>

                                        {/* Images */}
                                        <div
                                            className={`grid gap-4 mx-auto ${isMultiple
                                                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl"
                                                : "grid-cols-1 max-w-[260px]"
                                                }`}
                                        >

                                            {item.media.map((m, i) => (
                                                <div
                                                    key={i}
                                                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                                                >
                                                    <div className="relative overflow-hidden aspect-[4/5]">

                                                        {m.kind === "image" && (
                                                            <img
                                                                src={m.src}
                                                                alt={`${item.title} ${i + 1}`}
                                                                draggable={false}
                                                                onDragStart={(e) => e.preventDefault()}
                                                                onContextMenu={(e) => e.preventDefault()}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                                                            />

                                                        )}

                                                        {m.kind === "video" && (
                                                            <video
                                                                src={m.src}
                                                                autoPlay
                                                                loop
                                                                muted
                                                                playsInline
                                                                preload="metadata"
                                                                controls={false}
                                                                controlsList="nodownload noremoteplayback"
                                                                disablePictureInPicture
                                                                draggable={false}
                                                                onContextMenu={(e) => e.preventDefault()}
                                                                className="w-full h-full object-cover select-none"
                                                            />

                                                        )}

                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                        <div className="flex justify-center py-12">
                                            <div className="w-screen border-t border border-foreground/40" />
                                        </div>

                                    </motion.div>
                                );
                            }


                            return null;
                        })}
                    </motion.div>

                </motion.div>

                {/* Read More Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setExpanded((p) => !p)}
                        className="cosmic-button"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={expanded ? "less" : "more"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25 }}
                            >
                                {expanded ? "Show less" : "Read more"}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </section>
    );
};
