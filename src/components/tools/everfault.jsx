import React from "react";
import { EvervaultCard, Icon } from "../ui/everfault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] flex flex-col items-start max-w-sm mx-auto relative h-[26rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black" />
      <EvervaultCard text="☺" url="https://youtu.be/Y8mj7gne3iE" />
    </div>
  );
}
