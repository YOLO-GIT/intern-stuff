import { motion } from "framer-motion";

const CreepyDisclaimer = () => {
  return (
    <motion.p
      className="mb-6 dark:text-white text-gray-800 sm:text-gray-800 md:text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.span
        className="font-bold text-red-500"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Disclaimer:
      </motion.span>
      <motion.span
        className="italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        &nbsp;KESIMPULAN
      </motion.span>
    </motion.p>
  );
};

export default CreepyDisclaimer;
