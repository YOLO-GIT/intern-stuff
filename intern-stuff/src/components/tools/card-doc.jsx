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
    description: "Bahagian pertama untuk budak-budak praktikal.",
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
    link: "/documents_folder/bab_2",
  },
  {
    title: "Bab 3",
    description: "Daily and Weekly.",
    link: "/documents_folder/bab_3",
  },
  {
    title: "Bab 4",
    description: "Projek yang anda uat untuk firma anda. (Secara asas)",
    link: "/documents_folder/bab_4",
  },
  {
    title: "Bab 5",
    description: "Komen dan Candangan.",
    link: "/documents_folder/bab_5",
  },
  {
    title: "Bab 6",
    description: "Kesimpulan yang anda boleh buat selama praktikal anda.",
    link: "/documents_folder/bab_6",
  },
  {
    title: "Outro",
    description: "Reference yang anda boleh beri.",
    link: "/documents_folder/outro",
  },
];
