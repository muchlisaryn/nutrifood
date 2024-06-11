"use client";
import { NextUIProvider } from "@nextui-org/system";
import React from "react";

export default function AuthLayut({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </NextUIProvider>
  );
}
