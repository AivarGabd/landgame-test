import Image from "next/image";
import backgroundImageTop from "@/public/bg-top.svg";
import backgroundImageBottom from "@/public/bg-bottom.svg";
import LGSoftware from "@/public/LGSoftware.svg";
import { Button } from "./ui/button";

const BottomLinks = [
  "Информация",
  "Вакансии",
  "Помощь",
  "Конфиденциальность",
  "Правила",
  "FAQ",
  "Прайс-лист ",
];

const BrandWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 w-screen h-screen m-auto relative ">
      <div
        className="absolute top-0 right-0 w-[390px] h-[450.12px]"
        style={{
          backgroundImage: `url(${backgroundImageTop.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-[-178px] w-[390px] h-[450.12px]"
        style={{
          backgroundImage: `url(${backgroundImageBottom.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute top-6 left-14 flex items-center justify-center flex-col gap-0 font-bold">
        <div className="text-[150px]">23</div>
        <div className="mt-[-50px] text-[40px]">Стандарт</div>
      </div>

      {children}

      <div className="flex items-center justify-center flex-col gap-4 pb-6 fixed bottom-0 left-0 right-0">
        <div className="flex items-center justify-center flex-wrap gap-10">
          {BottomLinks.map((link) => (
            <Button key={link} variant={"ghost"}>
              {link}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col gap-10">
          <Image src={LGSoftware} alt="LGSoftware" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 absolute bottom-4 right-14">
        <div>
          <Button variant={"outline"}>EN</Button>
        </div>
        <div className="text-[45px]">16:40</div>
      </div>
    </div>
  );
};

export default BrandWrapper;
