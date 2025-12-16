import { ArrowRight, ExternalLink, Github, Instagram } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Blues🥀",
        image: "Projects/Blues.png",
        demoUrl: "https://www.instagram.com/p/DBWVhCNTRpr/",
    },
    {
        id: 2,
        title: "Zephyr🌕",
        image: "Projects/Zephyr.png",
        demoUrl: "https://www.instagram.com/p/C6-1OpPLw4_/",
    },
    {
        id: 3,
        title: "Kamala🪷",
        image: "Projects/Nalini.png",
        demoUrl: "#",
    },
        {
        id: 4,
        title: "Maya🦋",
        image: "Projects/Maya.png",
        demoUrl: "https://www.instagram.com/p/DRhTStND7lz/",
    },
            {
        id: 5,
        title: "Layla🪐",
        image: "Projects/Layla.png",
        demoUrl: "https://www.instagram.com/p/C4W2YBpvaFg/",
    },
            {
        id: 6,
        title: "Muse🌌",
        image: "Projects/Muse.png",
        demoUrl: "https://www.instagram.com/p/DObDtMUj35e/",
    },
            {
        id: 7,
        title: "Rebirth🌕",
        image: "Projects/Rebirth.png",
        demoUrl: "https://www.instagram.com/p/DMK2tqtvcgr/",
    },
            {
        id: 8,
        title: "Indu🌿",
        image: "Projects/Indu.png",
        demoUrl: "https://www.instagram.com/p/DHyU3kEPQvD/",
    },
            {
        id: 9,
        title: "Nirvana🌸",
        image: "Projects/Nirvana.png",
        demoUrl: "https://www.instagram.com/p/DGanyqHPOcp/",
    },
            {
        id: 10,
        title: "Meadows🍃",
        image: "Projects/Meadows.png",
        demoUrl: "https://www.instagram.com/p/DAgRbOVzE9N/",
    },
            {
        id: 11,
        title: "Lucid🪷",
        image: "Projects/Lucid.png",
        demoUrl: "https://www.instagram.com/p/C9-KU-SPTOR/",
    },
            {
        id: 12,
        title: "Gaze🌌",
        image: "Projects/Gaze.png",
        demoUrl: "https://www.instagram.com/p/DQ6vYS5j9M5/",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary" >
                Works
            </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the works I did recently and I'm always proud of.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
  <div
    key={project.id}
    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
  >
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
<h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
  {project.title}
</h3>

      </div>
    </a>
  </div>
))}


            </div>
            <div className="text-center mt-12">
                <a href="https://www.instagram.com/lazy_graphite?igsh=MTdibHc4aHF2b2d1Zg=="
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    My Instagram <Instagram size={20} />

                </a>
            </div>

        </div>

    </section>;
};