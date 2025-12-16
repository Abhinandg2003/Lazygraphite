import { ArrowRight, ExternalLink, Github, Instagram ,Download } from "lucide-react";


const posters = [
    {
        id: 1,
        image: "Posters/Blues.png",
        link: "https://drive.google.com/file/d/1UGpCfE0GOSNlHcGBt3T5ptxPf8uW2LXe/view?usp=drive_link"
    },
    {
        id: 2,
        image: "Posters/Layla.png",
        link: "https://drive.google.com/file/d/1adiKFxnV3Ya-mOstYYcGS1_30iabNSQN/view?usp=drive_link"
    },
    {
        id: 3,
        image: "Posters/Lucid.png",
        link: "https://drive.google.com/file/d/1bupY2TLC-vEF2rF1jKrGy5KipBNNeuBK/view?usp=drive_link"
    },

    {
        id: 4,
        image: "Posters/Meadows.png",
        link: "https://drive.google.com/file/d/13nv_ACPBqiAI85HbPGXmFZjahS1YGqEk/view?usp=drive_link"
    },
    {
        id: 5,
        image: "Posters/Zephyr.png",
        link: "https://drive.google.com/file/d/1ocvj94N8_vBYi1WG99w-PH3OHsxJKr1d/view?usp=drive_link"
    },
    {
        id: 6,
        image: "Posters/Wisdom.png",
        link: "https://drive.google.com/file/d/1vpxTUbm9iYHobQinXahGZctEDUeQXr0T/view?usp=drive_link"
    },
    {
        id: 7,
        image: "Posters/Kavya.png",
        link: "https://drive.google.com/file/d/1qNaSD5IuRicTu2DuyNSm1-mopkfg7_oR/view?usp=drive_link"
    },

]

export const PosterssSection = () => {
    return <section id="posters" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> Featured <span className="text-primary" >
                Posters
            </span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posters.map((poster) => (
                    <div
                        key={poster.id}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <a
                            href={poster.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={poster.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </a>
                    </div>
                ))}
                


            </div>

                        <div className="text-center mt-12">
                <a href="https://drive.google.com/drive/folders/11wOsA1eR6LEP843K-jKxAiJ-EpACJqsy?usp=drive_link"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Download My Posters <Download size={20} />

                </a>
            </div>

        </div>

    </section>;
};