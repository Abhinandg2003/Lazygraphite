import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Instagram, MailIcon, Download, } from "lucide-react";
import { DiGoogleDrive } from "react-icons/di";





const posters = [
  { id: 1, image: "Posters/Blues.png", link: `${import.meta.env.BASE_URL}downloads/Blues.png` },
  { id: 2, image: "Posters/Layla.png", link: `${import.meta.env.BASE_URL}downloads/Layla.png` },
  { id: 3, image: "Posters/Lucid.png", link: `${import.meta.env.BASE_URL}downloads/Lucid.png` },
  { id: 4, image: "Posters/Meadows.png", link: `${import.meta.env.BASE_URL}downloads/Meadows.png` },
  { id: 5, image: "Posters/Zephyr.png", link: `${import.meta.env.BASE_URL}downloads/Zephyr.png` },
  { id: 6, image: "Posters/Wisdom.png", link: `${import.meta.env.BASE_URL}downloads/Wisdom.png` },
  { id: 7, image: "Posters/Kavya.png", link: `${import.meta.env.BASE_URL}downloads/Kavya.png` },
  { id: 8, image: "Posters/Maya.png", link: `${import.meta.env.BASE_URL}downloads/Maya.png` },
];




const calendars = [
  { title: "January 2025", src: "Shop/Mockup cover comp.png" },
  { title: "February 2025", src: "Shop/Mockup july comp.png" },
  { title: "March 2025", src: "Shop/Mockup December comp.png" },
];

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ShopSection = () => {
  const [index, setIndex] = useState(0);

  const paginate = (dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return calendars.length - 1;
      if (next >= calendars.length) return 0;
      return next;
    });
  };

  const item = calendars[index];

  return (
    <section id="shop" className="py-24 px-4 relative z-10">
      <div className="max-w-xl mx-auto text-center space-y-8 ">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Shop</span>
        </h2>

        <h3 className="text-2xl font-bold text-center text-foreground">
          Calendar 2026
        </h3>

        {/* Carousel */}
        <div className="relative mx-auto w-[260px] sm:w-[450px] aspect-[1/1] pb-">

          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-xl transition bg-card "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-card shadow-sm ">
            <AnimatePresence>
              <motion.img
                key={item.src}
                src={item.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "linear" }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute inset-0 w-full h-full object-cover select-none "
              />
            </AnimatePresence>
          </div>


          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-xl transition bg-card"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "linear" }}
            className="text-sm text-muted-foreground"
          >
          </motion.p>
        </AnimatePresence>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-0 text-center items-center">
          <a
            href={`${import.meta.env.BASE_URL}downloads/Calendar_2026.pdf`}
            download
            className="cosmic-button w-fit flex items-center gap-2"
          >
            Download For Free <Download size={20} />
          </a>

        </div>
        <h3 className="text-2xl font-bold text-center text-foreground pt-16">
          Posters
        </h3>


        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <a
                href={poster.link}
                download
                className="block"
              >

                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={poster.image}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none"
                  />

                </div>
              </a>
            </div>
          ))}



        </div>

        <div className="text-center mt-12">
          <a
            href={`${import.meta.env.BASE_URL}downloads/Lazygraphite_Posters.zip`}
            download
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Download My Posters For Free <Download size={20} />
          </a>


        </div>




      </div>






    </section>
  );
};
