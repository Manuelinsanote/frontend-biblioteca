import type { Metadata } from "next";
import "./globals.css";
import { RegistroServiceWorker } from "./components/RegistroServiceWorker";

export const metadata: Metadata = {
  title: "Biblioteca App",
  description: "App de biblioteca PWA",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E3A5F" />
      </head>
      <body>
        {children}
        <RegistroServiceWorker />
      </body>
    </html>
  );
}
