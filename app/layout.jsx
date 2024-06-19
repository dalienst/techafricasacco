"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Suspense } from "react";
import BootstrapClient from "@/components/providers/BootstrapClient";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tech Africa Sacco</title>
        <meta
          name="description"
          content="Empowering Communities Through Financial Excellence and Trust"
        />
      </head>
      <body className="body">
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
