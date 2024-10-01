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
    link: "#/documents_folder/intro", // Updated path
  },
  {
    title: "Bab 1",
    description: "Objektif Praktikal.",
    link: "#/documents_folder/bab_1", // Updated path
  },
  {
    title: "Bab 2",
    description: "Sejarah Firma Anda.",
    link: "#/documents_folder/bab_2", // Updated path
  },
  {
    title: "Bab 3",
    description: "Daily and Weekly.",
    link: "#/documents_folder/bab_3", // Updated path
  },
  {
    title: "Bab 4",
    description: "Projek yang anda buat untuk firma anda. (Secara asas)",
    link: "#/documents_folder/bab_4", // Updated path
  },
  {
    title: "Bab 5",
    description: "Komen dan Candangan.",
    link: "#/documents_folder/bab_5", // Updated path
  },
  {
    title: "Bab 6",
    description: "Kesimpulan yang anda boleh buat selama praktikal anda.",
    link: "#/documents_folder/bab_6", // Updated path
  },
  {
    title: "Outro",
    description: "Reference yang anda boleh beri.",
    link: "#/documents_folder/outro", // Updated path
  },
];
