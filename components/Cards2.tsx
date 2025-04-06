import { Cards2Data, Cards2DataText } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import Image from "@/node_modules/next/image";

const Cards2 = ({
  title,
  data,
  text,
}: {
  title: string;
  data: Cards2Data[];
  text: Cards2DataText;
}) => {
  return (
    <div className="">
      <div className="container px-2 md:px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <Image
          src={"/krecenje1.jpg"}
          width={500}
          height={500}
          alt="krecenje"
          className="w-full rounded-xl"
        />
        <h2 className="text-3xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardContent className="text-lg md:text-xl ">
        <div className=" font-bold py-5 text-center">
          {" "}
          <IconComponent className="text-primary mx-auto" />
          <p className="text-primary pt-5">{item.title}</p>
        </div>
        <p className="text-left">{item.text}</p>
      </CardContent>
    </Card>
  );
};
