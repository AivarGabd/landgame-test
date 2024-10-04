"use client";

import Brandlogo from "@/components/auth-page/Brandlogo";
import BrandWrapper from "@/components/BrandWrapper";
import CustomInputHomePage from "@/components/CustomInputHomePage";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Smartphone } from "lucide-react";
import { useState } from "react";

const isNumberValid = (number: string) => {
  return number.match(/\d/g)?.length == 11;
};

const isPasswordValid = (password: string) => {
  return password.length > 6;
};

export default function Home() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNumberChange = (textInputValue: string) => {
    setNumber(textInputValue.trim());
  };

  const handlePasswordChange = (textInputValue: string) => {
    setPassword(textInputValue.trim());
  };

  return (
    <>
      <BrandWrapper>
        <section className="m-auto max-w-[400px]  align-middle justify-center flex flex-col gap-[60px]">
          <div className="flex items-center justify-center m-auto h-[100px]">
            <Brandlogo />
          </div>

          <div>
            <div className="flex items-center justify-center flex-col gap-10 max-w-[400px] m-auto">
              <div className="flex items-center justify-center flex-col gap-6">
                <div className="flex items-center justify-center flex-col gap-4">
                  <CustomInputHomePage
                    label="Номер телефона"
                    value={number}
                    onChange={handleNumberChange}
                    type="text"
                    icon={<Smartphone />}
                    placeholder="Введите номер телефона"
                  />

                  <CustomInputHomePage
                    label="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    icon={<LockKeyhole />}
                    placeholder="Введите пароль"
                    isPasswordInput
                  />
                </div>

                <div>
                  <Button variant="link">Забыли пароль?</Button>
                </div>
              </div>

              <Button
                className="w-full h-[40px] bg-red-500 text-white font-semibold rounded-[34px]"
                disabled={!isNumberValid(number) || !isPasswordValid(password)}
              >
                Войти
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col gap-0">
            <div>Если у вас еще нет аккаунта?</div>
            <Button variant={"ghost"}>
              <a
                href="/register"
                className="text-red-500 font-semibold text-[18px] "
              >
                Зарегистрируйтесь
              </a>{" "}
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            Установите приложение.
            <div className="flex items-center justify-center gap-2">
              <img
                src="/google-play.png"
                alt="google-play"
                width={120}
                height={120}
              />
              <img
                src="/app-store.png"
                alt="app-store"
                width={120}
                height={120}
              />
            </div>
          </div>
        </section>
      </BrandWrapper>
    </>
  );
}
