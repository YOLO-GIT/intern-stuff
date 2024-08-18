import Image from "../../assets/img-template.png";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Full_pptx from "../../documents/Slide_Presentation.pptx";

const Card = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-80 h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Contoh Slide Presentation LI
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          (Efek Hover ini untuk saja - saja.)
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={Image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={Full_pptx}
            target="__blank"
            className="px-4 py-2 rounded-xl w-full h-full bg-black dark:bg-white dark:text-black text-white font-bold text-center text-2xl"
          >
            Tekan Sini
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
