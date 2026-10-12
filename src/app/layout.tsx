import type { Metadata } from "next";
import "./globals.css";

export const siteUrl = "https://www.eliash.cc";

const title = "Elias Hezron Opio";
const description =
  "founder, tuning forks. building bella, a whatsapp task assistant for everyone.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
