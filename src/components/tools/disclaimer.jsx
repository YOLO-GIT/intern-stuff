import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function Disclaimer() {
  const words = [
    {
      text: "KESIMPULAN",
      className: "text-4xl font-bold text-red-900",
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
