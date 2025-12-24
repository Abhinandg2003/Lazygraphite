import { Briefcase, Code, User, Brush, Scissors, Film } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Aspiring Digital Artist</h3>

                    <p className="text-muted-foreground">
                        I create digital art and small animation stories, inspired by the vibrant culture of India — especially the southern regions.
                    </p>

                    <p className="text-muted-foreground">
                        My work focuses on emotions, beauty, and storytelling, often drawn from everyday feelings and imagined worlds.</p>

                        <p className="text-muted-foreground">
                        Each piece is a small attempt to tell a story, even without words. </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#journey" className="cosmic-button">
                            My Journey
                        </a>

                    </div>

                </div>


            </div>
        </div>
    </section>;
};