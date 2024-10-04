"use client";

import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockKeyhole, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const isNumberValid = (number: string) => {
  return number.match(/\d/g)?.length == 11;
};

const isPasswordValid = (password: string) => {
  return password.length > 6;
};

export default function Page() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");


  const handleNumberChange = (textInputValue: string) => {
    //Можно лучше в отдельной функции
    setNumber(textInputValue.trim());
  };


  const handlePasswordChange = (textInputValue: string) => {
    setPassword(textInputValue.trim());
  };

  console.log(isNumberValid(number))

  return (
    <div className="flex items-center justify-center flex-col gap-10 max-w-[400px] m-auto">
      <div className="flex items-center justify-center flex-col gap-6">
        <div className="flex items-center justify-center flex-col gap-4">
          <CustomInput
            label="Номер телефона"
            value={number}
            onChange={handleNumberChange}
            type="text"
            icon={<Smartphone />}
            placeholder="Введите номер телефона"
          />

          <CustomInput
            label="Пароль"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            icon={<LockKeyhole />}
            placeholder="Введите пароль"
            isPasswordInput
          />
        </div>

        <div className="text-[#909090] text-sm cursor-pointer">
          <a href="#">Забыли пароль?</a>
        </div>
      </div>

      <Button className="w-full h-[40px] rounded-[8px] bg-red-500 text-white font-semibold" disabled={!isNumberValid(number) || !isPasswordValid(password)}>Войти</Button>
    </div>
  );
}
