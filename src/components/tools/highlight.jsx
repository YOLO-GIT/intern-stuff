import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import TC from "../../documents/TC.pdf";

export function DisclaimerHighlight() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl md:text-2xl lg:text-3xl font-bold text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Disclaimer: Ingat! Contoh dibawah adalah sekadar bahan rujukan sahaja.
        Anda tidak perlu guna contoh yang diberi sepenuhnya.
        <br />
        <Highlight className="text-black">
          Kesalahan atau ketidaktepatan data anda bukan kesalahan kami!
        </Highlight>
        <br />
        Sila rujuk [
        <a
          href={TC} // Replace with the desired page number
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Terms & Condition
        </a>
        ] kami untuk mengetahui dengan lebih lanjut.
      </motion.h1>
    </HeroHighlight>
  );
}
