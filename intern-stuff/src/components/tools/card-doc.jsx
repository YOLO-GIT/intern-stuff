import { HoverEffect } from "../ui/card-hover-effect";

export function DocHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Intro",
    description: "Bahagian pertama untuk budak-udak praktikal.",
    link: "/documents_folder/intro",
  },
  {
    title: "Bab 1",
    description: "Objektif Praktikal.",
    link: "/documents_folder/bab_1",
  },
  {
    title: "Bab 2",
    description: "Sejarah Firma Anda.",
    link: "https://google.com",
  },
  {
    title: "Bab 3",
    description: "Daily and Weekly.",
    link: "https://meta.com",
  },
  {
    title: "Bab 4",
    description: "Projek yang anda uat untuk firma anda. (Secara asas)",
    link: "https://amazon.com",
  },
  {
    title: "Bab 5",
    description: "Kesimpulan yang anda boleh buat selama praktikal anda.",
    link: "https://microsoft.com",
  },
  {
    title: "Bab 6",
    description: "Komen dan Candangan.",
    link: "https://microsoft.com",
  },
  {
    title: "Outro",
    description: "Reference yang anda boleh beri.",
    link: "https://microsoft.com",
  },
];
