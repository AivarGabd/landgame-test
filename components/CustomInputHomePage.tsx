"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";




export default function CustomInputHomePage({
  label,
  value,
  onChange,
  type,
  icon,
  placeholder,
  isPasswordInput,
  styles
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "password" | "date" | "file";
  icon: React.ReactNode;
  placeholder: string;
  isPasswordInput?: boolean;
  styles?: string;
}) {
  const [inputType, setinputType] = useState<"password" | "text">("password");

  const handleToggle = () => {
    if (inputType === "password") {
      setinputType("text");
    } else {
      setinputType("password");
    }
  };




  return (
    <>
      <div
        className={cn(
          `relative flex gap-2 flex-wrap items-center bg-[#efefef] text-[#909090] w-[339px] h-[82px] rounded-[8px] pl-6 pr-2 
       
        ${styles} `
        )}
      >
        <div className="flex-shrink-0 items-center justify-center">{icon}</div>
        <div className="flex flex-col flex-grow h-full text-left justify-center relative font-semibold">
          {value.length != 0 ? (
            <div>
              <label className="text-sm text-black">{label}</label>
            </div>
          ) : null}

          <div className="relative ">
            <Input
              type={isPasswordInput ? inputType : type}
              placeholder={placeholder}
              className={`flex-grow bg-transparent text-black shadow-none border-none ${
                type === "file" ? "w-[260px] bg-white" : ""
              }`}
              onChange={(e) => onChange(e.target.value)}
            />
            {isPasswordInput && value.length > 0 && (
              <div
                className="flex justify-around items-center absolute right-0 bottom-1 z-50 text-black cursor-pointer text-sm mt-auto mb-0 "
                onClick={handleToggle}
              >
                Показать
              </div>
            )}
          </div>
        </div>

      </div>
    
    </>
  );
}
