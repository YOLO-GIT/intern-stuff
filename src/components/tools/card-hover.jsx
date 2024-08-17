import { AboutEffect } from "../ui/about-hover-doc";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-black">
      <AboutEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "My Portfolio",
    description: "My Portfolio 🗣️🔥🔥🔥",
    link: "https://yolo-git.github.io/My-First-Portfolio/",
  },
  {
    title: "LibraryPro",
    description:
      "Some website I made for some reason 🤷 (Maaf jikalau lambat sedikit nak masuk 😔)",
    link: "https://libraryprosmktd.000webhostapp.com/",
  },
  {
    title: "Search-Wurd",
    description: "Just a simple python project",
    link: "https://github.com/YOLO-GIT/Search-wurd",
  },
];
