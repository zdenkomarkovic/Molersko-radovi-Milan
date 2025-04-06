import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data, cards2Data } from "@/constants/index";

export default function Home() {
  return (
    <div>
      <HeroOneImg />
      <About2 />
      <PozoviteNasOdmah />
      <CardWithImage />
      <Cards1 title={"Naše usluge"} data={cards1Data} />
      <Cards2 title={"Kako funkcioniše saradnja sa nama?"} data={cards2Data} />
      <BackgroundImage />
    </div>
  );
}
