import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "PRAKTIKAL",
      className: "text-4xl",
    },
    {
      text: "-",
      className: "text-4xl",
    },
    {
      text: "ARCHIVE",
      className: "text-4xl text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
