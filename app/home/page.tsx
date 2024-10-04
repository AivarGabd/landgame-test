import Brandlogo from "@/components/auth-page/Brandlogo";
import { Button } from "@/components/ui/button";
import {
  MessageSquareText,
  Mouse,
  Repeat,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";

const tarifs = [
  {
    name: "Часовой тариф",
    price: "100 P",
  },
  {
    name: "Пакет на 3 часа",
    price: "270 P",
  },
  {
    name: "Пакет на 5 часов",
    price: "400 P",
  },
  {
    name: "Пакет  “День” (9:00 - 16:00)",
    price: "450 P",
  },
  {
    name: "Пакет ”Вечер” (16:00 - 22:00)",
    price: "450 P",
  },
  {
    name: "Пакет “Сутки” 24 часа ",
    price: "1450 P",
  },
];

const actions = [
  {
    name: "вернутся на рабочий стол",
    bgColor: "#f6fbff",
    icon: "/device.svg",
  },
  {
    name: "выбрать игру",
    bgColor: "#f8f0ff",
    icon: "/selectGame.svg",
  },
  {
    name: "Сообщить о проблеме",
    bgColor: "#fffeee",
    icon: "/problem.svg",
  },
  {
    name: "Проблить сессию",
    bgColor: "#f0fff9",
    icon: "/session.svg",
  },
  {
    name: "завершить сессию",
    bgColor: "#ffeded",
    icon: "/logOut.svg",
  },
];

const Page = () => (
  <div className="flex h-screen">
    <aside className="w-64 bg-white  mr-6 flex flex-col gap-6 text-center align-middle justify-center items-center pt-6 mt-0 mb-auto ">
      <div className="mb-8">
        <Brandlogo />
      </div>
      {/* Sidebar menu items */}
      <nav className="space-y-4 flex flex-col gap-10  w-full">
        <a
          href="#"
          className="items-center text-gray-600 hover:text-gray-800 flex flex-col gap-4  border-t border-gray-200 w-full pt-4"
        >
          <Repeat />
          <span className="font-semibold">История транзакций</span>
        </a>
        <a
          href="#"
          className="items-center text-gray-600 hover:text-gray-800 flex flex-col gap-4 border-t border-gray-200 w-full pt-4"
        >
          <Mouse />
          <span className="font-semibold">Забронировать</span>
        </a>
        <a
          href="#"
          className="items-center text-gray-600 hover:text-gray-800 flex flex-col border-t border-gray-200 w-full pt-4"
        >
          <SlidersHorizontal />
          <span className="font-semibold">Настройки</span>
        </a>
        <a
          href="#"
          className="items-center text-gray-600 hover:text-gray-800 flex flex-col border-y border-gray-200 w-full pt-4 min-h-[120px]"
        >
          <MessageSquareText />
          <span className="font-semibold">Поддержка</span>
        </a>
      </nav>
    </aside>

    <main className="flex-1 bg-[#eaeaea] rounded-l-3xl px-6 py-4 max-w-[1700px]">
      <section className="grid grid-cols-3 gap-4">
        <div className="w-[500px]">
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <Image
                src="/avatar.png"
                alt="User Avatar"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Алексей Костылев Николаевич
                </h2>
              </div>
            </div>
            <div className="bg-white px-4 py-6 rounded-3xl flex flex-col gap-4">
              <h3 className="font-semibold mb-2">
                ИНФОРМАЦИЯ О ТЕКУЩЕЙ СЕССИИ
              </h3>
              <div>
                <div className="font-medium w-full flex flex-wrap">
                  <div>Осталось минут:</div>
                  <div className="mr-0 ml-auto font-semibold">120 мин.</div>
                </div>

                <div className="font-medium w-full flex flex-wrap">
                  <div>Сессия истекает:</div>
                  <div className="mr-0 ml-auto font-semibold">
                    14.12.2020, 20:24
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[332px]">
            <img src="/ADS.png" alt="" />
          </div>
        </div>

        <div className="w-[500px] flex flex-col gap-6">
          <div className="bg-white rounded-3xl px-4 py-6">
            <div className="font-medium w-full flex flex-wrap">
              Текущий статус:{" "}
              <div className=" mr-0 ml-auto font-semibold">Standart</div>
            </div>
            <div className="font-medium w-full flex flex-wrap">
              До смены статуса осталось:{" "}
              <div className=" mr-0 ml-auto font-semibold">
                10 часов 23 минуты
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl px-4 py-6">
            <h3 className="font-semibold mb-2">ОСНОВНОЙ СЧЕТ</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">15 000 ₽</span>
              <span className="bg-gray-200 rounded px-2 py-1 text-sm">
                1200 ₽ бонусов
              </span>
            </div>
            <Button className="w-full h-[40px] bg-red-500 text-white font-semibold rounded-[34px]">
              ПОПОЛНИТЬ
            </Button>
          </div>
          <div className="h-[332px]">
            <img src="/ADS2.png" alt="" className="cover" />
          </div>
        </div>
        <div className="w-[500px] flex flex-col gap-6 px-4 py-6 bg-[#404040] rounded-3xl text-white h-fit">
          <div>
            <h2 className="font-semibold text-xl">
              Тарифы, доступные на данном ПК
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {tarifs.map((item) => (
              <div key={item.name} className="flex w-full py-6 border-t border-gray-200 ">
                <div>{item.name}</div>
                <div className="mr-0 ml-auto font-semibold ">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-wrap gap-10 py-6">
        {actions.map((item) => (
          <div
            key={item.name}
            className={`w-[280px] h-[148px] rounded-[22px] justify-center items-center flex flex-col gap-4`}
            style={{
              background: item.bgColor,
            }}
          >
            <img src={item.icon} className="h-[42px]" alt="" />
            <div className="font-semibold">{item.name}</div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default Page;
