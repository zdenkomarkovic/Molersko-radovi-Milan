import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-2 md:px-5 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
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

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm md:text-lg text-left px-2 md:px-3">
        {item.text.map((text, i) => {
          return (
            <p key={i} className="py-1">
              - {text}
            </p>
          );
        })}
      </CardContent>
    </Card>
  );
};
