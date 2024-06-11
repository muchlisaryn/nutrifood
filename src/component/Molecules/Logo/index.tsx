"use client";

import { useRouter } from "next/navigation";
import { Tooltip } from "@nextui-org/tooltip";

export default function Logo({ className }: { className?: String }) {
  const router = useRouter();
  return (
    <Tooltip content="Nutrifood mendukung tujuan diet Anda dengan nutrisi seimbang dan kalori terkendali">
      <div
        className={`${className} font-semibold text-xl cursor-pointer`}
        onClick={() => router.push("/")}
      >
        NUTRIFOOD
      </div>
    </Tooltip>
  );
}
