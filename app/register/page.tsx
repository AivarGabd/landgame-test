"use client";

import BrandWrapper from "@/components/BrandWrapper";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    ArrowLeft,
  Calendar,
  CircleUser,
  FileText,
  FolderDown,
  Info,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");

  const handleNameChange = (textInputValue: string) => {
    setName(textInputValue);
  };

  const handleNumberChange = (textInputValue: string) => {
    setNumber(textInputValue.trim());
  };

  const handlePasswordChange = (textInputValue: string) => {
    setPassword(textInputValue.trim());
  };

  const handleBirthdayChange = (textInputValue: string) => {
    setBirthday(textInputValue);
  };

  const handleDocumentNumberChange = (textInputValue: string) => {
    setDocumentNumber(textInputValue);
  };

  return (
    <BrandWrapper>
      <section className="flex items-center justify-center flex-col gap-10 w-[400px]">
        <div>
          <h2 className="text-[25px] font-bold">Регистрация</h2>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Button className="w-full h-[40px] bg-red-500 text-white font-semibold rounded-[34px] pl-10 gap-7">
            Полная
            <Info />
          </Button>
          <Button
            className="w-full h-[40px] font-semibold rounded-[34px] px-10"
            variant={"secondary"}
          >
            Упращенная
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-[700px]">
         <div className="w-full">
         <CustomInput
            styles="w-full"
            label="ФИО"
            value={name}
            onChange={handleNameChange}
            type="text"
            icon={<CircleUser />}
            placeholder="Введите ФИО"

          />

         </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full">
              <CustomInput
                label="Номер телефона"
                value={number}
                onChange={handleNumberChange}
                type="text"
                icon={<Smartphone />}
                placeholder="Введите номер телефона"
                errorId={1}
              />
            </div>
            <div>
              <CustomInput
                label="Дата рождения"
                value={birthday}
                onChange={handleBirthdayChange}
                type="date"
                icon={<Calendar />}
                placeholder="Введите дату рождения"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full">
              <CustomInput
                label="Документ"
                value={number}
                onChange={handleNumberChange}
                type="file"
                icon={<FolderDown />}
                placeholder="Введите номер телефона"
              />
            </div>
            <div>
              <CustomInput
                label="Укажите 10 цифр серия и номер"
                value={documentNumber}
                onChange={handleDocumentNumberChange}
                type="text"
                icon={<FileText />}
                placeholder="Укажите 10 цифр серия и номер"
                errorId={2}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full">
              <CustomInput
                label="Укажите пароль"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                icon={<LockKeyhole />}
                placeholder="Укажите пароль"
                isPasswordInput
                errorId={2}
              />
            </div>
            <div>
              <CustomInput
                label="Повторите пароль"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                icon={<LockKeyhole />}
                placeholder="Повторите пароль"
                isPasswordInput
                errorId={2}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Switch defaultChecked className="data-[state=checked]:bg-red-500" />
          <div className="text-sm font-bold">
            Я даю свое право на информационную рассылку
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 w-full">
         <a href="/home" className="w-full ">
         <Button className="w-full h-[40px] bg-red-500 text-white font-semibold rounded-[34px]">
            Зарегистрироваться
          </Button></a>
          <a href="/" className="w-full">
            <Button
              className="w-full h-[40px]  font-semibold rounded-[34px] gap-4"
              variant={"outline"}
            >
             <ArrowLeft /> Вернуться на главную
            </Button>
          </a>
        </div>
      </section>
    </BrandWrapper>
  );
};

export default Page;
