"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Logo from "@/component/Molecules/Logo";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function signIn() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  //toggle eye
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className="p-8">
        <Button
          className="bg-slate-100 text-slate-400 hover:text-slate-500 hover:bg-slate-300"
          onClick={() => router.push("/")}
        >
          <div>
            <FaArrowLeftLong />
          </div>
        </Button>
      </div>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-[30%] space-y-8">
          <section className="space-y-2">
            <Logo className="mb-8 text-orange-500" />
            <div className="font-bold text-2xl">SIGN IN</div>
            <p className="text-sm">
              Enter your credentials to access in your account
            </p>
          </section>

          <section>
            <form className="space-y-3">
              <Input
                name="email"
                type="email"
                variant="bordered"
                label="Email"
                isClearable
                isRequired
                onChange={handleChange}
              />
              <Input
                name="password"
                type={isVisible ? "text" : "Password"}
                variant="bordered"
                label="Password"
                isRequired
                onChange={handleChange}
                endContent={
                  <button onClick={toggleVisibility} type="button">
                    {isVisible ? <LuEye /> : <LuEyeOff />}
                  </button>
                }
              />
              <Button
                className="w-full bg-orange-500 text-white disabled:cursor-not-allowed disabled:bg-orange-300"
                size="lg"
                type="submit"
                disabled={signIn.email === "" || signIn.password === ""}
              >
                Sign
              </Button>
            </form>
          </section>

          <section className="text-center text-sm">
            Don't have an account?{" "}
            <span
              className="text-orange-500 hover:underline cursor-pointer"
              onClick={() => router.push("/sign-up")}
            >
              Sign Up
            </span>
          </section>
        </div>
      </div>
    </>
  );
}
