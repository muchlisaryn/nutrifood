"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import Logo from "../Logo";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="p-4 flex justify-between items-center absolute w-full">
      <Logo className="text-white " />
      <div></div>
      <div className="flex space-x-2">
        <Button
          className="text-white"
          size="md"
          type="submit"
          variant="light"
          onClick={() => router.push("/sign-up")}
        >
          testing
        </Button>
        <Button
          size="md"
          type="submit"
          className="bg-orange-500 text-white shadow-lg shadow-orange-600"
          onClick={() => router.push("/sign-in")}
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
}
