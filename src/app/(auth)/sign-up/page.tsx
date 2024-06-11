"use client";
import Logo from "@/component/Molecules/Logo";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[30%] space-y-8">
          <section className="space-y-3 ">
            <div className="font-bold text-2xl">Create New Account</div>
          </section>

          <section>
            <form className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  variant="bordered"
                  label="First Name"
                  isClearable
                  isRequired
                />
                <Input
                  type="email"
                  variant="bordered"
                  label="Last Name"
                  isClearable
                />
              </div>
              <Input
                type="email"
                variant="bordered"
                label="Username"
                isClearable
                isRequired
              />
              <Input
                type="email"
                variant="bordered"
                label="Email"
                isClearable
                isRequired
              />
              <Input
                type="Password"
                variant="bordered"
                label="Password"
                isClearable
                isRequired
              />
              <Input
                type="Password"
                variant="bordered"
                label="Confirm  Password"
                isClearable
                isRequired
              />
              <Button
                className="w-full bg-orange-500 text-white"
                size="lg"
                type="submit"
              >
                Create Account
              </Button>
            </form>
          </section>

          <section className="text-center text-sm">
            Already have an account?{" "}
            <span
              className="text-orange-500 hover:underline cursor-pointer"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </span>
          </section>
        </div>
      </div>
    </>
  );
}
